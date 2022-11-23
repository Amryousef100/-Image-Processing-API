"use strict";
//Create my middleware logger,  in a separate file.
//and I add logger to my response and request parameters of the callback function.
// The only requirement for the middleware was that it logs something to console when the endpoint is reached.
Object.defineProperty(exports, "__esModule", { value: true });
function logger(req, res, 
// eslint-disable-next-line @typescript-eslint/ban-types
next) {
    var url = req.url;
    console.log("".concat(url, " was visited"));
    next();
}
exports.default = logger;
