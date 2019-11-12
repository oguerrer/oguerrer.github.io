
LaborSim is an agent-computing model that simulates the individual dynamics of firms and workers in the labor market. The purpose of this application is to provide a pedagogical tool to anyone interested in labor dynamics and policy experiments. LaborSim was developed in JavaScript and only requires an updated browser to run in your computer or mobile device.



<p align="center">
<img src="/images/play-button.png" width="100" height="auto"><br>
<a href="https://oguerrer.github.io/laborsimapp/">
Run LaborSim
</a>
</p>


## What is it about?

LaborSim is about the dynamics of labor markets. In real economies, workers become unemployed and find new jobs, traversing parts of the vast economy throughout their careers. This process is quite complex considering the diversity of job types, skills of people, geographical constrains, technological innovations, etc. However, the labor market works in incredible ways by enhancing the reallocation of massive amounts of labor and human capital. Nevertheless, such reallocation is not smooth, giving rise to the phenomenon unemployment. LaborSim simulates these processes taking into account the rich structure of the labor market.


## What does it do?

LaborSim is a computational simulation of individual workers and firms interacting in the economy. Workers can lose their jobs and regain employment by searching for vacancies. The search on vacancies takes place on a network where each node represents a firm. The network captures the structure of the market, so job search is restricted by its topology. In other words, a worker can only search for jobs among those firms that are linked to their last employer. Therefore, workers at well-connected firms have better employment prospects. This theory has strong empirical support and it is a stylized way to learn about the role of specific firms in labor dynamics.


## Ingredients

The basic ingredients of laborSim are workers, firms, and a <em>frictionless network</em>. The current version is based on the simplest specification of local job search, which consists of three parameters:
<ul>
 	<li>Technological innovation <em>τ</em>: When a firm innovates new labor becomes obsolete. This means that, during innovation periods, firms do not take job applications (we say that they are closed). Otherwise, they are open to receive applications. <em>τ</em> is the probability that a firm is closed in a given period and it is the same for every firm.</li>
 	<li>Hiring policy <em>h</em>: When an open firm receives job applications, it hires a fraction of the applicants. This fraction can also be interpreted as the probability that a job application succeeds in a given period. <em>h</em> represents this probability and it is specific to each firm.</li>
 	<li>Separation rate <em>λ</em>: Every period, an employed worker can become unemployed with a probability <em>λ</em>. This is commonly known as the separation rate and it is firm-specific.</li>
</ul>



