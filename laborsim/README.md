
LaborSim is an agent-computing model that simulates the individual dynamics of firms and workers in the labor market. The purpose of this application is to provide a pedagogical tool to anyone interested in labor dynamics and policy experiments. LaborSim was developed in JavaScript and only requires an updated browser to run in your computer or mobile device. The source code of LaborSim can be foung <a href="https://github.com/oguerrer/laborsim/" target="_blank" rel="noopener">here</a>.



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


## What is different?

In contrast with conventional frameworks, laborSim models each worker and each firm individually and takes into account the complex structure that constrains their interactions. This approach provides a lot of flexibility on the types of questions that one can address. For example, we can test how a specific group of firms affects the unemployment rate if these firms would close down (closing not only generates unemployment but also modifies the network structure). We can also test how unemployment reacts to policies that targeted to specific firms. This type of questions is untreatable with conventional models. Hence, laborSim offers a new technology to inform discussions about labor policy.


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

<img class="alignright wp-image-254" src="/images/netPanel-294x300.jpg" alt="netPanel" width="300" height="300" align="right">The left panel of the app shows the layout of a <em>frictionless network</em>. Each node represents a firm and the colors are assigned at random by default. The size of a node is proportional to the number of workers that it employs. The colored ring around the node represents the number of workers who left that firm and remain unemployed. At the bottom of this panel there are four buttons. The <i class="fa fa-play"></i> button runs and pauses the model. The <i class="fa fa-tachometer"></i> button controls how fast the model iterates each step. It means that 100% is full speed. The <i class="fa fa-share-alt fa-rotate-90"></i> icon rearranges the network layout. This would be normally used in case several nodes start overlapping due to changes in their sizes. Finally, the <i class="fa fa-magic"></i> button adds 10 new firms and connect them randomly to other firms. Each new firm comes with a randomly assigned number of workers (employed and unemployed). You can click on any firm to select it (hold Shift to select multiple firms). The search bar at the top right corner of the panel allows to select all firms that meet a criteria. We will explain more about this capability once we have introduced the rest of the features.


## Dashboard

<img class="alignleft wp-image-262" src="/images/dashboard-300x232.jpg" alt="dashboard" width="300" height="232" align="left">The dashboard on the right hand side provides summarized information about the economy. More visualizations will be added in future versions of laborSim. The upper left panel shows the number of firms and workers in the economy, as well as the current amount and percentage of employed and unemployed agents. The <em>tech. inn.</em> slider controls the probability <em>τ</em> that firms creates a technological innovation. The <em>add firm </em>button drops a new firm in the economy with a random number of workers and one connection to the firm that was added most recently. Top right panel presents the current information of a firm or firms that has been selected through the network panel. The <em>hiring</em> and <em>separation</em> sliders control the probabilities <em>h</em> and <em>λ. </em>When multiple firms have been selected, you can homogenize their parameters by moving the sliders. If two disconnected firms are selected, you can create a link between them with the <i class="fa fa-link"></i> button. You can also destroy a link by selecting two firms that are connected and pressing <i class="fa fa-chain-broken"></i>. The button <i class="fa fa-bomb"></i> shots down the firm, meaning that its hiring policy becomes 0% and its separation rate 100%. If you want to destroy the firm, the action <i class="fa fa-trash-o"></i> removes it with its links and workers from the network permanently. The <i class="fa fa-thumb-tack"></i> icon allows you to open a new panel that keeps track of the selected firm, while focusing on other selections. The <em>unemployment rate</em> panel shows the unemployment rate time series as the model runs. The <i class="fa fa-history"></i> button allows you to choose between a cumulative series or a rolling window. The <i class="fa fa-recycle"></i> button clears the plot. The <em>unemployment volatility </em>panel shows the evolution of the variance of the unemployment rate. The data used to calculate the volatility is taken from the unemployment rate panel. By using the <i class="fa fa-crop"></i> button, you can select the length of the time window that the plot uses to compute the variance of the unemployment rate. The Beveridge curve is a scattered plot that depicts the number of unemployed (horizontal axis) versus the number of successful job seekers (as a proxy for vacancies) (vertical axis) at different points in time. The <i class="fa fa-tint"></i> action changes the color of the future dots that will be plotted.


## Importing networks

We have implemented other features that allow you to explore customized economies and export data. You can export the state of the entire economy (every firm) to a text file by using the <em>Export</em> button from the head menu. You can also import your own population of firms by using the <em>Import</em> menu and pressing the <em>From Specs</em> button. There, you only need to paste the text that describes the economy that you cant to simulate. The format of the text file that you will export or import follows theJavaScript Object Notation (JSON). <a href="https://github.com/oguerrer/laborSimTutorials/wiki/Network-Specification" target="_blank" rel="noopener">Here</a> we provide full details on how to specify these files and some examples.
<p align="justify"></p>

## Searching

The search function form the network panel works on the firm ids. The ids are provided in the JSON file as a string. At this moment, you can encode any property of a firm in its id, for example: firm25-sector3-region7 would correspond to firm 25 that belongs to the economic sector 3 and is located in the geographical region 7. Once a network is loaded, you can use regular expressions in the search bar in order to select all firms that meet the criteria that you are looking for. This is extremely powerful if you plan to analyze the effect of shocks or policies in specific firms in the economy.

