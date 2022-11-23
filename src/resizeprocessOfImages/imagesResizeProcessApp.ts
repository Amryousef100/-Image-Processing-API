// AFTER installed sharp
//create a separate module for your processing functionality and import it into your route.
// It is only required that I add resizing,

import sharp from 'sharp';
import fs from 'fs';
import * as path from 'path';

const imagesResizeProcessApp = (
  imagePathBeforeProcessing: string,
  processedImagesPath: string,
  width: number,
  height: number,
  callback: CallableFunction
): void => {
  sharp(imagePathBeforeProcessing) // need path of the rquired image to resize it
    .rotate()
    .resize(width, height)
    .jpeg({ mozjpeg: true })
    .toBuffer()
    .then((data: Buffer) => {
      fs.writeFileSync(processedImagesPath, data);
    })
    .then(() => {
      callback(processedImagesPath);
    }) // need to path of resized image
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .catch((err) => {
      callback(path.resolve('Assets', 'full', `Error.jpg`));
    });
};
// in case error send to browser error image explain to user
//What does the user do to make the application run successfully?

export default imagesResizeProcessApp;
