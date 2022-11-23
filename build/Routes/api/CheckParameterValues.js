"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path = __importStar(require("path"));
var fs_1 = __importDefault(require("fs"));
var imagesResizeProcessApp_1 = __importDefault(require("../../resizeprocessOfImages/imagesResizeProcessApp"));
var CheckParameterValues = express_1.default.Router(); //create routes object from the express.Router(); method
//Create my root endpoint for getting the root path of my app using my routes object
CheckParameterValues.get('/', function (req, res) {
    var sendData = function (data) {
        res.sendFile(data);
    };
    // creating query prama and control in types of values for width and height
    //The quality of the height and width values must be positive numbers,
    // and if it is the opposite, a message appears to the user
    //that a problem has been created and a solution is given to
    //him to make the application work successfully
    // for value of filename must be name of offerd images if it is the opposite
    // error image appears to the user that a problem has been created and a solution is given to
    //him to make the application work successfully
    var name = req.query.fileName;
    var width = Number(req.query.width);
    var height = Number(req.query.height);
    if (req.query.fileName && req.query.width && req.query.height) {
        if (isNaN(width) || isNaN(height) || width < 0 || height < 0) {
            res.send('there is a problem ! You must make sure that the values of width and height are(positive numbers) to use the application successfully');
        }
        else {
            fs_1.default.existsSync(path.resolve('Assets', 'thumb')) ||
                fs_1.default.mkdir(path.resolve('Assets', 'thumb'), function (err) {
                    if (err) {
                        return console.error(err);
                    }
                    console.log('Directory created its OK!');
                });
            var imagePathBeforeProcessing = path.resolve('Assets', 'full', "".concat(name, ".jpg"));
            var processedImagesPath = path.resolve('Assets', 'thumb', "".concat(name, "_").concat(width, "_").concat(height, ".jpg"));
            // I created a so-called add cashing using iF conditionals
            //so that if the data entered was requested before
            //and the image size was changed, if a request to
            // resize an image with the same data that was entered before,
            // this image will be retrieved from the folder Thumb to browser without resizing an image again
            if (fs_1.default.existsSync(processedImagesPath)) {
                res.sendFile(processedImagesPath);
            }
            else {
                (0, imagesResizeProcessApp_1.default)(imagePathBeforeProcessing, processedImagesPath, width, height, sendData);
            }
        }
    }
    else {
        res.send('The App needs to choose names of images from  this (fjord, encenadaport, palmtunnel, santamonica, icelandwaterfall) and values of Width And Height is positive number To Work like this http://localhost:1269/api/images?fileName=fjord&width=800&height=800 ');
    }
});
exports.default = CheckParameterValues;
