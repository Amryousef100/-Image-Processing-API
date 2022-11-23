"use strict";
//Express is installed through NPM along with express type definitions
// Nodemon is installed and a "start" script is created to run nodemon on the application entry file
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express")); //importing express to use in my application
var CheckParameterValues_1 = __importDefault(require("./Routes/api/CheckParameterValues"));
var logger_1 = __importDefault(require("./utilities/logger")); //import middleware for use on my routes.
var app = (0, express_1.default)(); // the creation of  the application object
var port = 1269;
app.use(express_1.default.json());
app.use('/api/images', logger_1.default, CheckParameterValues_1.default); // endpoint is created that gets the route API and sends the required back to the browser using
//middleware  to logging the request before sending the response
app.listen(port, function () {
    console.log("server is started at http://localhost:".concat(port, "/:")); //the app listens on my port and starts a server on localhost then sends a message to the console that the server has started
});
exports.default = app;
