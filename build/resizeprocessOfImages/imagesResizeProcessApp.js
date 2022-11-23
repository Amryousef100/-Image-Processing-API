"use strict";
// AFTER installed sharp
//create a separate module for your processing functionality and import it into your route.
// It is only required that I add resizing,
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
var sharp_1 = __importDefault(require("sharp"));
var fs_1 = __importDefault(require("fs"));
var path = __importStar(require("path"));
var imagesResizeProcessApp = function (imagePathBeforeProcessing, processedImagesPath, width, height, callback) {
    (0, sharp_1.default)(imagePathBeforeProcessing) // need path of the rquired image to resize it
        .rotate()
        .resize(width, height)
        .jpeg({ mozjpeg: true })
        .toBuffer()
        .then(function (data) {
        fs_1.default.writeFileSync(processedImagesPath, data);
    })
        .then(function () {
        callback(processedImagesPath);
    }) // need to path of resized image
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .catch(function (err) {
        callback(path.resolve('Assets', 'full', "Error.jpg"));
    });
};
// in case error send to browser error image explain to user
//What does the user do to make the application run successfully?
exports.default = imagesResizeProcessApp;
