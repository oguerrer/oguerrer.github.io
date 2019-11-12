
LaborSim is an agent-computing model that simulates the individual dynamics of firms and workers in the labor market. The purpose of this application is to provide a pedagogical tool to anyone interested in labor dynamics and policy experiments. LaborSim was developed in JavaScript and only requires an updated browser to run in your computer or mobile device.


![](https://github.io/oguerrer/images/play-button.png?v=4&s=200)


## What is it about?

LaborSim is about the dynamics of labor markets. In real economies, workers become unemployed and find new jobs, traversing parts of the vast economy throughout their careers. This process is quite complex considering the diversity of job types, skills of people, geographical constrains, technological innovations, etc. However, the labor market works in incredible ways by enhancing the reallocation of massive amounts of labor and human capital. Nevertheless, such reallocation is not smooth, giving rise to the phenomenon unemployment. LaborSim simulates these processes taking into account the rich structure of the labor market.


## What does it do?

LaborSim is a computational simulation of individual workers and firms interacting in the economy. Workers can lose their jobs and regain employment by searching for vacancies. The search on vacancies takes place on a network where each node represents a firm. The network captures the structure of the market, so job search is restricted by its topology. In other words, a worker can only search for jobs among those firms that are linked to their last employer. Therefore, workers at well-connected firms have better employment prospects. This theory has strong empirical support and it is a stylized way to learn about the role of specific firms in labor dynamics.


## How is it different?

In contrast with conventional frameworks, laborSim models each worker and each firm individually and takes into account the complex structure that constrains their interactions. This approach provides a lot of flexibility on the types of questions that one can address. For example, we can test how a specific group of firms affects the unemployment rate if these firms would close down (closing not only generates unemployment but also modifies the network structure). We can also test how unemployment reacts to policies that targeted to specific firms. This type of questions is untreatable with conventional models. Hence, laborSim offers a new technology to inform discussions about labor policy.


