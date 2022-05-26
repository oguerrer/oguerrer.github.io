import { assert, median } from "../utils";
import { computeError } from "./compute-error";

const calibrate = (
  I0, IF, success_rates, A, R, qm, rl, Bs, B_dict,
  T = 50, parallel_processes, threshold = 0.6,
  verbose = false, low_precision_counts = 101,
  increment = 1000, test = false, sample_size = 10, for_calibrate = true
) => {
  // eslint-disable-next-line no-undef
  nj.config.printThreshold = 4;
  // Check data integrity
  success_rates = success_rates.map(function (item) { return item >= 1 ? 0.95 : item; });
  success_rates = success_rates.map(function (item) { return item <= 0 ? 0.05 : item; });

  assert(threshold < 1, 'the threshold must be lower than 1')
  assert(I0.length == IF.length, 'I0 and IF must have the same size')


  // # Initialize hyperparameters and containers
  const N = I0.length
  // eslint-disable-next-line no-undef
  var params = nj.ones(3 * N).multiply(0.5).tolist()  // vector containing all the parameters that need calibration

  var counter = 0
  // eslint-disable-next-line no-undef
  let GoF_alpha = nj.zeros(N)
  // eslint-disable-next-line no-undef
  let GoF_beta = nj.zeros(N)
  let list_TF = []
  let alphas = [];
  let alphas_prime = [];
  let betas = [];
  let errors_alpha = [];
  let errors_beta = [];
  // Main iteration of the calibration
  // Iterates until the minimum threshold criterion has been met, and at least 100 iterations have taken place
  // eslint-disable-next-line no-undef
  while ((nj.mean(GoF_alpha) < threshold || nj.mean(GoF_beta) < threshold) || counter < low_precision_counts) {

    counter += 1 // Makes sure at least 100 iteartions are performed

    // unpack the parameter vector into 3 vectors that correspond to the different parameter types
    alphas = params.slice(0, N)
    alphas_prime = params.slice(N, 2 * N)
    betas = params.slice(2 * N)

    // compute the errors for the specified parameter vector
    let [errors_all, TF] = computeError(I0, alphas, alphas_prime, betas, A,
      R, qm, rl, Bs, B_dict,
      null, T, IF, success_rates,
      parallel_processes, test,
      sample_size, for_calibrate = true);
    
    // unpack the error vector
    errors_alpha = errors_all.tolist().slice(0, N)
    errors_beta = errors_all.tolist().slice(N)
    list_TF.push(TF)

    // normalize the errors
    let abs_errors_alpha = Object.keys(errors_alpha).map(i => Math.abs(errors_alpha[i]))
    let gaps = Object.keys(IF).map(i => IF[i] - I0[i])
    let temp_abs_gaps = Object.keys(gaps).map(i => Math.abs(gaps[i]))
    let normed_errors_alpha = Object.keys(abs_errors_alpha).map(i => abs_errors_alpha[i] / temp_abs_gaps[i])
    let abs_normed_errors_alpha = Object.keys(normed_errors_alpha).map(i => Math.abs(normed_errors_alpha[i]))
    let abs_errors_beta = Object.keys(errors_beta).map(i => Math.abs(errors_beta[i]))
    let normed_errors_beta = Object.keys(success_rates).map(i => abs_errors_beta[i] / success_rates[i])
    let abs_normed_errors_beta = Object.keys(normed_errors_beta).map(i => Math.abs(normed_errors_beta[i]))

    // apply the gradient descent and update the parameters
    for (let i = 0; i < N; i++) {
      if (errors_alpha[i] < 0) {
        if (IF[i] != I0[i]) {
          // eslint-disable-next-line no-undef
          params[i] = params[i] * nj.clip(1 - abs_normed_errors_alpha[i], 0.25, 0.99).get(0)
          // eslint-disable-next-line no-undef
          params[i + N] = params[i + N] * nj.clip(1 + abs_normed_errors_alpha[i], 1.01, 1.5).get(0)
        }
      } else if (errors_alpha[i] > 0) {
        if (IF[i] !== I0[i]) {
          // eslint-disable-next-line no-undef
          params[i] = params[i] * nj.clip(1 + abs_normed_errors_alpha[i], 1.01, 1.5).get(0)
          // eslint-disable-next-line no-undef
          params[i + N] = params[i + N] * nj.clip(1 - abs_normed_errors_alpha[i], 0.25, 0.99).get(0)
        }
      }
      if (errors_beta[i] > 0) {
        // eslint-disable-next-line no-undef
        params[i + 2 * N] = params[i + 2 * N] * nj.clip(1 + abs_normed_errors_beta[i], 1.01, 1.5).get(0)
      } else if (errors_beta[i] < 0) {
        // eslint-disable-next-line no-undef
        params[i + 2 * N] = params[i + 2 * N] * nj.clip(1 - abs_normed_errors_beta[i], 0.25, 0.99).get(0)
      }
    }

    // # compute the goodness of fit
    // eslint-disable-next-line no-undef
    GoF_alpha = nj.array(Object.values(normed_errors_alpha).map(i => 1 - i))
    // eslint-disable-next-line no-undef
    GoF_beta = nj.array(Object.values(abs_normed_errors_beta).map(i => 1 - i))

    //     # check low_precision_counts iterations have been reached
    //     # after low_precision_counts iterations, increase the number of Monte Carlo simulations by
    //     # 1000 in every iterations in order to achieve higher precision and
    //     # minimize the error more effectively
    if (counter >= low_precision_counts) {
      sample_size += increment;
    }

    // prints the calibration iteration and the worst goodness-of-fit metric
    if (verbose) {
      let min_gof_alpha_beta = []
      min_gof_alpha_beta = min_gof_alpha_beta.concat(GoF_alpha.tolist())
      min_gof_alpha_beta = min_gof_alpha_beta.concat(GoF_beta.tolist())
      // eslint-disable-next-line no-undef
      console.log(`Iteration: ${counter}. Worst goodness of fit: ${nj.mean(min_gof_alpha_beta)}`);
    }
  }
  // # save the last parameter vector and de associated errors and goodness-of-fit metrics

  // eslint-disable-next-line no-undef
  const output = nj.zeros(1)
  output.set(0, ['alpha', 'alpha_prime', 'beta', 'error_alpha', 'error_beta', 'GoF_alpha', 'GoF_beta']);
  // eslint-disable-next-line no-undef
  [...Array(N).keys()].map(i => output.set(i + 1, [alphas[i], alphas_prime[i], betas[i], errors_alpha[i],
  errors_beta[i], GoF_alpha.get(i), GoF_beta.get(i)]))

  return output
}

export { calibrate };
