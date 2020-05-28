---
layout: page
title: Policy Priority Inference
---

Policy Priority Inference (PPI) is a computational framework created to understand the complexity of policy prioritization and to support governments who wish to distribute transformative resources across numerous policy issues with the aim of reaching specific development goals.

Please watch the explainer video below in order to get an overview of PPI.

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/h3H6tUaDkvE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>


## The Sustainable Development Goals (SDGs)

The 2030 Agenda Declaration of the United Nations highlights the importance of understanding development as a process where numerous policy dimensions interact with each other: "*The interlinkages and integrated nature of the SDGs are of crucial importance in ensuring that the purpose of the new Agenda is realized*".
Governments, NGOs and multilateral organizations quantify the progress in these many policy issues through development indicators.
The UN member states have agreed on tracking 200+ indicators in order to evaluate their progress towards the 17 SDGs.
How can governments make sense of hundreds of indicators when they are interlinked with each other?
With such interconnectivity inducing non-linearities, feedback loops and spillovers, how can policymakers identify the impact of public expenditure?
How can governments prioritize investing in certain topics in order to reach their goals?
Which policy issues can operate as accelerators towards these goals?
How can society evaluate the feasibility of such goals?
These and other related questions live at the center of public debate in international forums and development agendas.
They are intrinsically connected to the complexity of policy prioritization, and their answers require new methodologies.

<center><img class="aligncenter wp-image-254" src="/images/ppi/strip.jpg" align="center" width="100%"></center>


<br>

## The complexity of development

PPI combines knowledge from Complexity Economics, Computational Social Science, Behavioral Sciences, and Policy Sciences in a computational framework.
It views the economy as a complex adaptive system where micro-level policy interventions give place to macro-level outcomes.
These outcomes, in turn, feed back into the governments' decisions about public expenditure and policy interventions.
These micro-macro-micro causal mechanisms are difficult to analyze with traditional statistical tools, especially if no comprehensive multi-level data exist.
In the real world, macro-level outcomes are typically measured through development indicators.
However, data on the micro-level policymaking process tend to be scarce, at least of a a similar scale and systematic nature as those of development indicators.

<center><img class="aligncenter wp-image-254" src="/images/ppi/diagram_2.jpg" align="center" width="70%"></center>

In view of such limitations, PPI simulates the dynamics of development indicators through a computational model of the political economy shaping the choices of rationally-bounded policymakers.
More specifically, PPI simulates a *central authority* that allocates transformative resources with the aim of improving indicators and reaching a set of goals.
In the simulation, these resources are transformed into development outcomes by *policy agents*, each one representing a public official or government agency in charge of improving the relevant development indicators.
The macro-level dynamics of the simulated indicators depend on (1) the amount of resources allocated by the central authority, (2) the policy agents' efficiency, and (3) the interlinkages between policy issues.

When combined with real-world data, PPI can be calibrated to generate synthetic development indicators with properties that match empirical ones.
In this case, PPI's theoretical variables (micro-level information that is unobservable in the real world) are informative about how governments reach development goals.
Thus, PPI can exploit publicly available datasets to support governments decisionmaking towards the SDGs.



<br>

## What is it useful for?

These are some ways in which PPI can be used:

- *Resource allocation*: informing how to redistribute resources across numerous interdependent policy issues with the aim of reaching specific goals.
*Transformative* refers to those resources allocated to generate changes in development indicators beyond those already set in motion by committed expenditure (like maintaining highways and paying pensions).

- *Feasibility assessment*: estimating how long it would take to reach a set of goals.

- *Inefficiencies*: inferring how much resources are being wasted in improving each development indicator.

- *Development goals*: exploring a vast space of goals in order to choose those that are most suitable for a country’s context.

- *Policy coherence*: computing an index on how coherent a government’s priorities are with respect to its goals.

- *Accelerators*: searching for issues that catalyze improvements in more than one indicator.

- *Bottlenecks*: finding issues where the lack of resources delay convergence towards the goals.

- *Fiscal rigidities*: assessing the effects of lacking fluidity in the reallocation of resources.*

- *Open fiscal data*: replicating observable expenditure patterns to strengthen counterfactual analyses.

-	*Budget size*: understanding how an increase or decrease in the amount of resources accelerates or delays convergence to the goals.



<br>

## What data do I need?

Just like any other empirical methodology, PPI benefits from bigger and better data.
Computationally speaking, it scales well, so it can handle more indicators as governments and NGOs continue to create them.
Technically speaking, PPI can simulate indicator dynamics by just taking their initial and final values, and two parameters that capture institutional factors of public governance (which can be obtained from public datasets such as the World Bank's Worldwide Governance Indicators).
However, it is highly advisable to also provide the time series of the indicators (so that PPI can match their empirical volatility) and a network of interdependencies between the indicators (which can be obtained via qualitative or quantitative methods).
Other types of data that can significantly improve the quality of the inferences are SDG-fiscal linked data and information on fiscal rigidities.
Due to its high flexibility, PPI will be able to incorporate bigger and better data as it become available in the future.
The diagram below illustrates the data that PPI can exploit today.

<center><img class="aligncenter wp-image-254" src="/images/ppi/pyramid.jpg" align="center" width="60%"></center>


<br>

## Who can benefit from PPI?

These are some of PPI's potential adopters:

- *Governments*: public agencies in charge of designing budgets and of preparing development plans. These can be at either  the national or subnational level.

- *Sector analysts*: to study policy prioritization at the level of specific sectors, for example, telecommunications, public health, education, etc.

- *Multilateral organizations*: international agencies providing policy advice to governments and publishing reports that evaluate the countries' progress towards the SDGs.

- *Aid donors*: organizations conditioning international aid on prioritizing specific policy issues.

- *The third sector*: NGOs, charities and think tanks who want to evaluate development strategies.

- *Academics*: researchers and instructors can perform simulation experiments and make inferences that cannot be done without the synthetic micro-level data that PPI generates.

- *Political parties*: assessing the feasibility of achieving campaign promises.

- *Consultants and rating agencies*: evaluating governments on development-related issues

<br>

## Resources

#### Papers
The reference document containing technical details is the paper entitled <a href=" http://ssrn.com/abstract=3604041" target="_blank" rel="noopener">*Policy Priority Inference: A Computational Method for the Analysis of Socioeconomic Development*</a> by Omar A. Guerrero and Gonzalo Castañeda.
We will soon publish a new paper with methodological developments to incorporate open spending data to PPI. 
All other publications and precursors of PPI can be found in the <a href="http://oguerr.com/research" target="_blank" rel="noopener">*RESEARCH*</a> section.

#### Policy reports
So far, three UNDP reports have been made publicly available. They are in Spanish, however, the research paper mentioned above tries to provide the main insigths from these reports.

<center><img class="aligncenter wp-image-254" src="/images/ppi/report_mex_1.jpg" align="center" width="30%"></center>
<center><img class="aligncenter wp-image-254" src="/images/ppi/report_mex_2.jpg" align="center" width="30%"></center>
<center><img class="aligncenter wp-image-254" src="/images/ppi/report_mex_3.jpg" align="center" width="30%"></center>



#### Presentations
The <a href="http://oguerr.com/video" target="_blank" rel="noopener">*VIDEO*</a> section contains different presentations that I have given on PPI.
You can find a recent one below.

<center>
<iframe width="360" height="115" src="https://www.youtube.com/embed/OVE_mjp3Fxs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>

#### Data & code
The <a href="https://github.com/oguerrer/PPI4SD" target="_blank" rel="noopener">PPI GitHub repository</a> provides all the code used in the reference paper, as well as all the necessary data to reproduce its findings.
It also contains Jypyter Notebooks with tutorials about data processing, running simulations, calibrating the model, and performing basic analyses.

<br>

## Acknowledgments
Throughout the development of PPI, various funders have noticed its potential and usefulness, providing their financial support, for which we are grateful.
We would like to thank The Alan Turing Institute for supporting the early versions of PPI and providing the necessary computational resources; the United Nations Development Programme for financing the adaptation of PPI to the SDGs; and the Economic and Social Research Council for its current sponsorship in integrating open fiscal data.
We are also grateful to the various policymakers and researchers that participated in the numerous workshops and seminars where this tool has been presented; their feedback has been invaluable.


<br>

<center> 
  <img class="aligncenter wp-image-254" src="/images/ppi/sponsors.jpg" align="center" width="70%" hspace="50">
</center>


<br>

## More information
Should you have any further inquiries regarding PPI, or about consulting and training services, please do not hesitate in contacting me at <a href="mailto:oguerrero@turing.ac.uk" target="_blank" rel="noopener">oguerrero@turing.ac.uk</a>.





