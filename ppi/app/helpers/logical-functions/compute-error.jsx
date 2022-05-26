import { ppi } from "./runppi"

// Computes a set of Monte Carlo simulations of PPI, obtains their average statistics,
// and computes the error with respect to IF and success_rates. Called by the calibrate function.
function computeError(I0, alphas, alphas_prime, betas, A, R, qm, rl, Bs, B_dict, G, T,
  IF, success_rates, parallel_processes, test, sample_size, for_calibrate = false) {
  const sols = []
  if (parallel_processes === undefined || parallel_processes == null) {
    for (const itera in Array.from({ length: sample_size })) {
      sols.push(ppi(I0, alphas, alphas_prime,
        betas, A, R, null, qm, rl, null, null,
        Bs, B_dict, G = null, T, null, test, for_calibrate))
    }
  }
  const I_hat = []
  sols[0][0].tolist().map((j) => {
    // eslint-disable-next-line no-undef
    I_hat.push(nj.mean(j.slice(-1)))
  })

  const gamma_hat = []
  sols[0][5].tolist().map((i) => {
    // eslint-disable-next-line no-undef
    gamma_hat.push(nj.mean(i))
  })
  const error_alpha = Object.keys(IF).map((i) => (IF[i] - I_hat[i]))
  const error_beta = Object.keys(success_rates).map(i => success_rates[i] - gamma_hat[i])
  let sum_error_alpha_beta = []
  sum_error_alpha_beta = sum_error_alpha_beta.concat(error_alpha)
  sum_error_alpha_beta = sum_error_alpha_beta.concat(error_beta)
  // eslint-disable-next-line no-undef
  return [nj.array(sum_error_alpha_beta), sols[0][0].shape[1]];

}

export { computeError };
