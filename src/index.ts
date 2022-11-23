//Express is installed through NPM along with express type definitions
// Nodemon is installed and a "start" script is created to run nodemon on the application entry file

import express from 'express'; //importing express to use in my application
import CheckParameterValues from './Routes/api/CheckParameterValues';
import logger from './utilities/logger'; //import middleware for use on my routes.

const app = express(); // the creation of  the application object

const port = 1269;

app.use(express.json());

app.use('/api/images', logger, CheckParameterValues); // endpoint is created that gets the route API and sends the required back to the browser using
//middleware  to logging the request before sending the response

app.listen(port, () => {
  console.log(`server is started at http://localhost:${port}/:`); //the app listens on my port and starts a server on localhost then sends a message to the console that the server has started
});

export default app;
