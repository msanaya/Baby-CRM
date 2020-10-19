# Baby-CRM


## Project Title To be determined....
This is a Ruby on Rails with a React front-end app. I call it a baby CRM because it's only a snippet of a full CRM. In this application the user a.k.a the salesperson after logging-in can create a sales order to be reviewed later. 


<br>

- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## MVP

### Goals
- User is able to log in
- User is able to create a Sales Order
- Sales Order will have relationships with the Users, Customers and Products tables
- View of all Sales Orders created by User
- View of all Customers
- View for all Products

<br>


### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _A JavaScript library for building user interfaces._ |
|   Axios   | _A promise based HTTP client for the browser and node.js._ |
| React Dom | _A package that serves as the entry point to the DOM and server renderers for React. It is intended to be paired with the generic React package._ |
|   React Router Dom   | _A package that does declarative routing for React._ |
|    Ruby   | _A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write._ |
|    Rails   | _A server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller framework, providing default structures for a database, a web service, and web pages._ |
|   PostgreSQL   | _A powerful, open source object-relational database with a strong reputation for reliability, feature robustness, and performance._ |
| Puma | _A Ruby/Rack web server built for concurrency._ |
|  Bcrypt  | _A cross platform file encryption utility._ |
|  JWT  | _An Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims. The tokens are signed either using a private secret or a public/private key._ |
|  Rack Cors  | _A rack Middleware for handling Cross-Origin Resource Sharing (CORS), which makes cross-origin AJAX possible._ |
|  Byebug  | _A simple to use and feature rich debugger for Ruby._ |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

![Dummy Link](url)

- Desktop Landing


#### Component Tree



#### Component Hierarchy

<img alt="Component Hierarchy" src="https://storage.googleapis.com/p4images/component_hierarchy.png" width="350">


#### Component Breakdown


All components will be functional.

<br>

|  Component   |  state | props | Description                                                      |
| :----------: | :--------: | :---: | :--------------------------------------------------------------- |
|    Header    |   n   |   n   | _The header will contain the logo._               |
|  Footer  |  n   |   n   | _The footer will contain author contact information and links._ |
|   Main    |   y   |   n   | _Main will render the sales orders. Links to DetailsSO, UpdateSO and CreateSO._ |
|    Register    |    y   |   n   | _Register will have a form for the user to create an account._ |
| CreateSO |    y   |   y   | _CreateSO short for create sales order will have a sales form for the user._ |
|    DetailsSO    |    n   |   y   | _DetailSO will show all the information a sales order contains._ |
|   UpdateSO    |      y   |   y   | _UpdateSO will allow the user to modify an existing sales order._ |
| Products |   n   |   y   | _Products will render each product using flexbox._  |



#### Time Estimates

<br>

| Task                | Priority | Estimated Time | Actual Time Invested | 
| ------------------- | :------: | :------------: | :-----------: | 
| Create Database    |    H     |     5 hrs      |     TBD     |   
| Create CRUD Actions |    M     |     3 hrs      |     TBD     |    
| Deploy Rails API |    H     |     1.5 hrs      |     TBD     |    
| Create React App Skeleton |    M     |     3 hrs      |     TBD     |     
| Map Screens |    H     |     16 hrs      |    TBD   |     
| Styling |    H     |     3 hrs      |    TBD     |     
| TOTAL               |          |     31.5 hrs      |     TBD     |     



<br>

### Server (Back End)

#### ERD Model

<p align="center">
  <img src="https://storage.googleapis.com/p4images/ERD_p4.png" />
</p>

<br>

***

## Post-MVP

- Being able to display data visualizations.
- Having a customer profile option.

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.