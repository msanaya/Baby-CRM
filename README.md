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

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. 

#### Component Hierarchy

![Component Hierarchy](https://storage.googleapis.com/p4images/component_hierarchy.png)



#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Gallery    |   class    |   y   |   n   | _The gallery will render the posts using cards in flexbox._      |
| Gallery Card | functional |   n   |   y   | _The cards will render the post info via props._                 |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

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