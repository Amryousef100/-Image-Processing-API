//I prepared a test of  Endpoint Testing by Install Supertest as a dependency => npm i supertest

//I added type definition to allow the code to compile without TypeScript errors.

//npm i --save-dev @types/supertest

import supertest from 'supertest';
import app from '../index';
import imagesResizeProcessApp from '../resizeprocessOfImages/imagesResizeProcessApp';
import * as path from 'path';

//I test with async code is letting Jasmine know when it’s ready to be tested.
//for gets the api endpoint
//and gets the api endpoint to work with values of query Pramters
//and image processing.
// the application Image Processing API url to be tested is
// http://localhost:1269/api/images?fileName=fjord&width=500&height=500

const request = supertest(app);
describe('Test endpoint responses', () => {
  it('gets the api endpoint', async () => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(200);
  });
  it('gets the api endpoint to work with values of query Pramters', async () => {
    const response = await request.get(
      '/api/images?fileName=fjord&width=500&height=500'
    );
    expect(response.status).toBe(200);
  });
});

const name = 'fjord';
const width = 500;
const height = 500;

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

describe('Test prossesing for images', () => {
  it('gets the prossesed image ', async () => {
    const callback = (path: string): void => {
      expect(path).toEqual(processedImagesPath);
    };
    imagesResizeProcessApp(
      imagePathBeforeProcessing,
      processedImagesPath,
      width,
      height,
      callback
    );
  });
});
