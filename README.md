# OPOWER API / Front End
## Node + Yeoman + AngularJS + Grunt + Karma
#### [Istic](https://istic.univ-rennes1.fr/) School project

version 0.0.1 [development]

Project in Distributed information system (SIR [Système d'information répartie] : french)

This is a demo front end API OPOWER.
Best front end API is in backend Opower project in github dbsEngineering repository.
[Backend](https://github.com/dbsengineering/backend)

Allows you to compare the consumption of your home's electrical equipment with your friends.

<img src="https://user-images.githubusercontent.com/8668325/38469347-9a55105a-3b53-11e8-9f88-cd4b9bf6f0b6.PNG" width="956" height="723">
(Illustration : screen example)

## Getting Started

- Download backend Opower Project in github dbsEngineering repository. [Backend](https://github.com/dbsengineering/backend)
- Open with IntelliJ.
- Open for exemple Wamp and create database name.
- Change database name in resources/application.properties.
- Change "spring.jpa.hibernate.ddl-auto" parameter in "resources/application.properties" to "update" if you want keep data. 
- Download this project.
- launch in terminal with grunt serve command
- Click on start. It's working.
- Beginin click on main-controller command in WEB UI [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html).

- Origin the "spring.jpa.hibernate.ddl-auto" paramter in "resources/application.properties" is on create-drop. You can create fictif data in MainController command.

### Prerequisites

To have data base sql and Maven installed. If not show the dependency in file.
To have Opower backend project downloaded and running. [Backend](https://github.com/dbsengineering/backend)


### Installing

Project make on IntelliJ.

You must to make an MySql database(empty). You can editing the application.properties for database name, login and password of your database.


## Running

- Launch your database MySql or launch server with bach script sh. (here is MySql)

- Run Main class

- open Postman or your navigator (here : [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html))

## Built With

#### [WebStorm](https://www.jetbrains.com/webstorm/)

* This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)


## Authors

* **Cavron Jérémy** - *Initial work* - [Portfolio](http://www.dbs.bzh/portfolio)


## Acknowledgments

* Project school. [Istic](https://istic.univ-rennes1.fr/) - university - Rennes 1.

* API documentation JSON [http://localhost:8080/v2/api-docs/](http://localhost:8080/v2/api-docs)
* API documentation WEB UI [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)
