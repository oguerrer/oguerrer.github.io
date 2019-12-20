---
layout: page
title: Policy Priority Inference (PPI)
---

PPI is a computational framework created to understand the complexity of policy prioritization and to support governments who wish to distribute transformative resources across numerous policy issues with the aim of reaching specific development goals.


## The Sustainable Development Goals (SDGs)

The 2030 Agenda Declaration of the United Nations highlights the importance of understanding development as a process where numerous policy dimensions interact with each other: "*The interlinkages and integrated nature of the SDGs are of crucial importance in ensuring that the purpose of the new Agenda is realized*".
Governments, NGOs and multilateral organizations quantify the progress in these many policy issues through development indicators.
The UN member states have agreed on tracking 200+ indicators in order to evaluate their progress towards the 17 SDGs.
Some countries, however, track even more indicators due to their context-specific needs.
Then, how can we make sense of hundreds of indicators when they are interlinked with each other?
With these interlinkages inducing non-linearities, feedback loops and spillovers, how can policymakers identify the impact of public expenditure?
How can governments prioritize investing in certain topics in order to reach their goals?
Which policy issues can operate as accelerators towards these goals?
How can society evaluate the feasibility of such goals?
These and other related questions live at the center of public debate in international forums and development agendas.
They are intrinsically connected to the complexity of policy prioritization, and their answers require new methodologies.


<center><img class="aligncenter wp-image-254" src="/images/ppi/strip.jpg" align="center" width="100%"></center>


<br>

## Development as a complex process

PPI combines knowledge from Complexity Economics, Computational Social Science, Behavioral Sciences, and Policy Sciences in a computational framework.
It views the economy as a complex adaptive system where micro-level policy interventions give place to macro-level outcomes.
These outcomes, in turn, feed back into the governments' decisions about public expenditure and policy interventions.
These micro-macro-micro causal mechanisms are difficult to analyze with traditional statistical tools, especially if not comprehensive multi-level data exists.
In the real world, macro-level outcomes are typically measured through development indicators.
However, data on the micro-level policymaking process tend to be scarce, at least in a similar scale and systematic nature as those of development indicators.

<br>

<center><img class="aligncenter wp-image-254" src="/images/ppi/diagram_2.jpg" align="center" width="70%"></center>

In view of such limitations, PPI simulates the macro-level dynamics of development indicators through a computational model of the policymaking process shaping the choices of rationally-bounded policymakers.
More specifically, PPI simulates a *central authority* that allocates transformative resources with the aim of improving indicators and reaching a set of goals.
In the simulation, these resources are transformed into development outcomes by *policy agents*, each one representing a public official or government agency in charge of improving the relevant development indicators.
The macro-level dynamics of the simulated indicators depend on (1) the amount of resources allocated by the central authority, (2) the policy agents' efficiency, and (3) the interlinkages with other policy issues (for example, because industrial growth may hinder environmental progress).

When combined with real-world data, PPI can be calibrated to generate synthetic development indicators with properties that match the empirical ones.
In this case, PPI's theoretical variables (those at the micro-level that are unobservable in the real world) are informative about how governments reach development goals.
Thus, PPI can exploit publicly available datasets to support governments reaching the SDGs.



<br>

## What is it useful for?

These are some ways in which PPI can be used:

- *Allocating transformative resources*: It can be used to inform governments on how to better allocate transformative resources across numerous interdependent policy issues with the aim of reaching a set of goals that have been established in national or sub-national development plans.
*Transformative* refers to those resources destined to generate changes in development indicators beyond those already set in motion by committed expenditure (like maintaining highways and hospitals).

- *Evaluating feasibility*: Given the indicators' historical trends, PPI can be employed to estimate how long it would take to reach a set of goals.
Therefore, it is possible to assess whether such goals are feasible in the short or medium run.

- *Estimating inefficiencies*: PPI can provide estimates on how much resources are being wasted in improving each development indicator.

- *Setting development goals*: Since it is possible to evaluate goal feasibility, PPI can be used to explore a vast space of goals in order to choose those that are more suitable for a government's constraints (for example, term duration, budget, inefficiencies, etc.).

- *Measuring policy coherence*: IPP can generate counterfactuals of policy priorities; that is, simulated allocations that are conducive to a set of goals, and that may defer from a governments' factual priorities.
These simulations are the basis of a quantitative index that is informative of how coherent are a government's priorities with respect to its goals.

- *Discovering accelerators*: The tool's flexibility enables experiments where one can reallocate resources in order to find those policy issues that catalyze improvements more than one indicator.
    
- *Identifying bottlenecks*: The counterpart of an accelerator is a bottleneck.
PPI can be employed to find those policy issues where a lack of transformative resources, negative interlinkages, or high inefficiencies delay convergence towards the established goals.
    
- *Accounting for fiscal rigidities*: Often, legislation restricts the fluidity of resources across policy issues.
PPI can take this into account to improve its inferences, or to evaluate whether these rigidities are beneficial or detrimental.
Fiscal rigidities are common among sub-national governments because the national authority conditions certain funding to specific policy issues.

- *Estimating the impact of changing the budget size*: PPI can help understanding how an increase or decrease in the availability of transformative resources may accelerate or slow down convergence to the goals.
This is a concern, for example, among countries where an aging population if forcing governments to shrink the amount of available resources in order to fulfill other non-transformative commitments such as paying pensions.


<br>

## What data do I need?

Just like any other empirical methodology, PPI benefits from bigger and better data.
Computationally speaking, it scales well, so it can handle more indicators as governments and NGOs continue to create them.
Technically speaking, PPI can simulate indicator dynamics by just taking their initial and final values, and two parameters that capture institutional factors of public governance (which can be obtained from public datasets such as the World Bank's Worldwide Governance Indicators).
However, it is highly advisable to also provide the time series of the indicators (so that PPI can match their empirical volatility) and a network of interdependencies between the indicators (which can be obtained via qualitative or quantitative methods).
Other types of data that can significantly improve the quality of the inferences are SDG-fiscal linked data and information on fiscal rigidities.
Due to its high flexibility, PPI will be able to incorporate bigger and better data as it become available in the future.
The diagram below illustrates the data that, at this stage of development, PPI can exploit.

<br>

<center><img class="aligncenter wp-image-254" src="/images/ppi/pyramid.jpg" align="center" width="60%"></center>


<br>

## Who can benefit from PPI?

These are some of PPI's potential adopters:

- *Governments*: Public agencies in charge of designing budgets and of preparing development plans. These can be at either  the national or subnational level.

- *Sector analysts*: PPI can also be use to study policy prioritization at the level of specific sectors, for example, telecommunications, public health, education, etc.

- *Multilateral organizations*: International agencies who provide policy advice to governments and who publish reports evaluating countries' progress towards the goals of international agendas such as the SDGs.

- *Aid donors*: Organizations who condition international aid on prioritizing specific policy issues can use PPI to evaluate how coherent have been the recipients' policy priorities.

- *Non-governmental organizations*: The civil society can employ PPI to evaluate various aspects of the government's development strategies.

- *Researchers*: Scientists and academics can perform simulation experiments and make inferences that cannot be done without the synthetic micro-level data that PPI generates.

- *Political parties*: Politicians could benefit from better understanding the complexity of achieving the development goals that their campaigns promise.

- *Consultants*: Consultants can adopt PPI to generate policy reports and bespoke evaluations on development-related issues.


<br>

## Resources

#### Papers
The reference document containing all the technical details is the paper entitled <a href="http://oguerr.com/video" target="_blank" rel="noopener">*Policy Priority Inference: A Computational Method for the Analysis of Socioeconomic Development*</a> by Omar A. Guerrero and Gonzalo Castañeda.
All other publications related to earlier versions and of PPI and their applications can be found in the <a href="http://oguerr.com/research" target="_blank" rel="noopener">*RESEARCH*</a> section of this website.

#### Presentations
The <a href="http://oguerr.com/video" target="_blank" rel="noopener">*VIDEO*</a> section of this site contains different videos of presentations that I have given on PPI.
You can find one of them below.

<p>Policy Priority Inference for Sustainable Development<br/>The Alan Turing Institute, 2019</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/OVE_mjp3Fxs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### Data & code
The PPI GitHub repository provides all the code used in the reference paper, as well as all the necessary data to reproduce its findings.
It also contains a series of Jypyter Notebooks with short tutorials about data processing, running simulations, calibrating the model, and performing simple analyses.

<br>

## Acknowledgments
Throughout the development of PPI, various funders have noticed its potential and usefulness, providing their financial support, for which we are grateful.
We would like to thank The Alan Turing Institute for supporting the early versions of PPI and providing the necessary computational resources; the United Nations Development Programme for financing the adaptation of PPI to the SDGs; and the Economic and Social Research Council for its current sponsorship in integrating open fiscal data into PPI.
We are also grateful to the various policymakers and researchers that participated in the numerous workshops and seminars where this tool has been presented; their feedback has been invaluable for the improvement of PPI.


<br>

<center> <img class="aligncenter wp-image-254" src="/images/ppi/ati.jpg" align="center" width="15%" hspace="10">
  <img class="aligncenter wp-image-254" src="/images/ppi/undp.jpg" align="center" width="8%" hspace="10">
  <img class="aligncenter wp-image-254" src="/images/ppi/esrc.jpg" align="center" width="15%" hspace="10">
</center>


<br>

## More information
Should you have any further inquiries regarding PPI, or about consulting and training services, please do not hesitate in contacting me at <a href="mailto:oguerrero@turing.ac.uk" target="_blank" rel="noopener">oguerrero@turing.ac.uk</a>.





