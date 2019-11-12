
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


## Algorithm

The algorithm iterates through time. Each time step can be summarized in the following sequence:

1.- Each firm innovates with probability <em>τ.</em>

2.- Each unemployed searches among the open neighbors of her last employer, picks one at random (with the same probability), and submits an application.

3.- Each employed worker becomes unemployed with the probability <em>λ </em>that is specific to her firm.

4.- Each firm hires a fraction  from all the applications received.

Needless to say, a job seeker remains unemployed if there are no open neighbors or if her job application fails. In this version, seekers can only apply to one firm per period, and firms do not discriminate between workers. However, this and other behaviors can be easily changed if you want to implement our model yourself.


## Network panel

<img class="alignright wp-image-254" src="/images/netPanel-294x300.jpg" alt="netPanel" width="300" height="300" />The left panel of the app shows the layout of a <em>frictionless network</em>. Each node represents a firm and the colors are assigned at random by default. The size of a node is proportional to the number of workers that it employs. The colored ring around the node represents the number of workers who left that firm and remain unemployed. At the bottom of this panel there are four buttons. The <i class="fa fa-play"></i> button runs and pauses the model. The <i class="fa fa-tachometer"></i> button controls how fast the model iterates each step. It means that 100% is full speed. The <i class="fa fa-share-alt fa-rotate-90"></i> icon rearranges the network layout. This would be normally used in case several nodes start overlapping due to changes in their sizes. Finally, the <i class="fa fa-magic"></i> button adds 10 new firms and connect them randomly to other firms. Each new firm comes with a randomly assigned number of workers (employed and unemployed). You can click on any firm to select it (hold Shift to select multiple firms). The search bar at the top right corner of the panel allows to select all firms that meet a criteria. We will explain more about this capability once we have introduced the rest of the features.







