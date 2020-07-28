# Ações Byne

This project serves to monitor various fictitious stock values. JavaScrip, [ReactJs](https://pt-br.reactjs.org/), [Redux](https://redux.js.org/) and [Bootstrap](https://getbootstrap.com/) were used to implement the front-end.

For communication with the back-end, the websocket protocol was used.

For structuring the front-end, the component pattern was used. These components communicate through providers and actions, located in the store (Redux).

As it is a SPA, the execution of the project starts in *App.js*, where it is called the *Title component* and the *Stocks component*. *Component Stocks* concentrates the business rule, it is called the *websocket*, it receives the information from the back-end and presents it on the screen.

When the connection is established with the backend, the frontend expects to receive a Json object with the accepted symbols. This object will be parsed and then the frontend sends a subscribe event with the actions you want to update the value. In response to the backend, it is expected to receive the share with its updated value.

For environment variable settings, use the .env file.

* Websocket settings:
    * REACT_APP_URL
    * REACT_APP_PORT

* Settings for updating values
   * REACT_APP_PORCENT_VARIANCE
   * REACT_APP_TIME_VARIANCE

If the .env file has not been configured, the defaults will be used:

* REACT_APP_URL: localhost
* REACT_APP_PORT: 8080
* REACT_APP_PORCENT_VARIANCE: 20
* REACT_APP_TIME_VARIANCE: 1

To start development, run the commands:

* **npm i** for installation of the premises
* **npm start** to execute the project

Open a browser window with the address localhost:3000

To run the tests, use npm test

For more information about the backend: https://bitbucket.org/byne/testfrontend1/src/master/

![Img BYNE](./resolves/img/img.png)
