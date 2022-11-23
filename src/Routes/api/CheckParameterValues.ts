import express from 'express';
import { Request, Response } from 'express';
import * as path from 'path';
import fs from 'fs';

import imagesResizeProcessApp from '../../resizeprocessOfImages/imagesResizeProcessApp';

const CheckParameterValues = express.Router(); //create routes object from the express.Router(); method

//Create my root endpoint for getting the root path of my app using my routes object
CheckParameterValues.get('/', (req: Request, res: Response): void => {
  const sendData = (data: string): void => {
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
  const name: string = req.query.fileName as string;
  const width: number = Number(req.query.width) as number;
  const height: number = Number(req.query.height) as number;

  if (req.query.fileName && req.query.width && req.query.height) {
    if (isNaN(width) || isNaN(height) || width < 0 || height < 0) {
      res.send(
        'there is a problem ! You must make sure that the values of width and height are(positive numbers) to use the application successfully'
      );
    } else {
      fs.existsSync(path.resolve('Assets', 'thumb')) ||
        fs.mkdir(path.resolve('Assets', 'thumb'), (err) => {
          if (err) {
            return console.error(err);
          }
          console.log('Directory created its OK!');
        });
      const imagePathBeforeProcessing: string = path.resolve(
        'Assets',
        'full',
        `${name}.jpg`
      );

      const processedImagesPath: string = path.resolve(
        'Assets',
        'thumb',
        `${name}_${width}_${height}.jpg`
      );

      // I created a so-called add cashing using iF conditionals
      //so that if the data entered was requested before
      //and the image size was changed, if a request to
      // resize an image with the same data that was entered before,
      // this image will be retrieved from the folder Thumb to browser without resizing an image again

      if (fs.existsSync(processedImagesPath)) {
        res.sendFile(processedImagesPath);
      } else {
        imagesResizeProcessApp(
          imagePathBeforeProcessing,
          processedImagesPath,
          width,
          height,
          sendData
        );
      }
    }
  } else {
    res.send(
      'The App needs to choose names of images from  this (fjord, encenadaport, palmtunnel, santamonica, icelandwaterfall) and values of Width And Height is positive number To Work like this http://localhost:1269/api/images?fileName=fjord&width=800&height=800 '
    );
  }
});

export default CheckParameterValues;
