1 - this my project => Image Processing API

2 - project idea :
building an API that can be used in two different ways. As a simple API, the former allows placing images in the front end with a size set via URL parameters (and additional style if you choose) for rapid prototyping. The second use case is as a library to serve appropriately sized versions of images to the front end to reduce page load size. Instead of having to resize and upload multiple copies of the same image to use throughout the site, the API will handle the resizing of the stored images and present them to you.

3- I started by set up  Node.js  in my computer,  then I installed all dependencies, and wrote install all necessary configurations to make your dependencies work together. to make the project being built relatively simple
 then  use => npm install
 then 
To initialize npm and go through all of the settings use
 npm init
To automatically select all defaults use -y

 npm init -y

  npm i prettier  

 then  Run the install script

  npm i --save-dev prettier.

I added a prettier script to my package.json file. The script which I choose can vary dramatically depending on the project. The one below will only overwrite files located in the src directory 

"prettier": "prettier --config .prettierrc 'src/**/*.js' --write"

then I installed TypeScript globally, =>   npm install -g typescript

npm i typescript --save-dev // save to devDependencies

To use TypeScript, I added a script to my package.json file to compile TypeScript to JavaScript. This is generally called  "build" script 

"scripts": {
    "build": "npx tsc"
  },

  To execute my "build" script I used the following:

   npm run build


   4-  then Configuring TypeScript by  installed the config file, run => npx tsc --init 
   then make some modifications in tsconfig.json file as follows

   {
  "compilerOptions": {
    "target": "es5",                          
    "module": "commonjs",                     
    "lib": ["ES2018", "DOM"], 
    "outDir": "./build",                        
    "strict": true,                           
    "noImplicitAny": true,                 
  },
  "exclude": ["node_modules", "tests"]
}

5- Run the build script

npm run build

6- after that I starded to  Configureting Jasmine to test my app after finished it so
I installed Jasmine run:
npm i jasmine 

 then  I Added a reporter for outputting Jasmine results to the terminal:

npm i jasmine-spec-reporter

I added  type definitions for Jasmine with :

npm i --save-dev @types/jasmine

then I added Testing Scripts:

 I went to the scripts object in the package.json 
 then I added the following to run jasmine:

"jasmine": "jasmine"

then i made  File Structure as follows :-

├── node_modules
├── spec
│      └── support
│           └── jasmine.json
├── src
│     ├──  tests
│     │     ├── helpers
│     │     │      └── reporter.ts
│     │     └── indexSpec.ts
│     └── index.ts
├── package-lock.json
├── package.json
└── tsconfig.json

 then In the jasmine.json I added the following configurations for a basic Jasmine configuration:

{
    "spec_dir": "build/tests",
    "spec_files": [
        "**/*[sS]pec.js"
    ],
    "helpers": [
        "helpers/**/*.js"
    ],
    "stopSpecOnExpectationFailure": false,
    "random": false
}

then 

In the tsconfig.json file, I added "spec" to the list of folders that we want to exclude.

  "exclude": ["node_modules", "./build", "spec"]

  then 
I combined the two into one script in our package.json file:

"test": "npm run build && npm run jasmine"


to test the app after write test in indexSpec.ts file I use => npm run test

then 

7- I prepared a test of  Endpoint Testing by Install Supertest as a dependency => npm i supertest

I added type definition to allow the code to compile without TypeScript errors.

 npm i --save-dev @types/supertest. 

 then Import SuperTest in the indexSpec.ts file. after finshed the app as follows


import supertest from 'supertest';
import app from '../index';
import imagesResizeProcessApp from '../resizeprocessOfImages/imagesResizeProcessApp';
import * as path from 'path';


then I wrote the test for gets the api endpoint 
and gets the api endpoint to work with values of query Pramters 
and image processing

8 - I Built a server using Express and run it at port 1269 as follows 

Install express

npm i express


Install type definitions for express

npm i --save-dev @types/express


Install nodemon

npm i --save-dev nodemon

I added a start script for nodemon in the package.json file

"start": "nodemon src/index.ts"

Import express into index.ts

import express from 'express';
Create my application object with express()

const app = express();
Set a port const port = 1269;

I added an API endpoint to get a route, then send a response to the browser

Set your application to listen on your port and output a message to the console with app.listen
to see the application start in development mode. by => npm run start
and to build and run my file project by => npm run build

9 - I made File Structure to use routes as follows :-
Create individual file for  route my application will contain under my individual routes folder./routes/api



10 - I created my middleware logger, in a separate file.and I added types to my response and request parameters of the callback function
The only requirement for the middleware was that it logs something to console when the endpoint is reached


After all of the above

1 - I started building the endpoint using the route and the query parameter as entering the data required for the  application to run successfully
  It is the name of the image, its height and width, and in the case of entering data that does not match the application’s work successfully, a message appears to the user that he is in a problem and shows him how to solve it


   2-   Create two folders, one of them is in the pictures whose size you want to resize and name it, and the other is put the pictures that have been resized and named it Thumb


3 - then 
installed  sharp and I created separate module for my processing functionality and import it into my route. It is only required that  adding resizing,



   
   3-I created a so-called addcash using iF conditionals so that if the data entered was requested before and the image size was changed, if a request to resize an image with the same data that was entered before, this image will be retrieved from the folder Thumb to browser without resizing an image again




   4 - I wrote my test for => http://localhost:1269/api/images?fileName=fjord&width=500&height=500

 I wrote the test for gets the api endpoint 
and gets the api endpoint to work with values of query Pramters 
and image processing


5- the last my end point  this

 http://localhost:1269/api/images?fileName=fjord&width=500&height=500


after reviewing

1-  the application Image Processing API url to be tested is
 http://localhost:1269/api/images?fileName=fjord&width=500&height=500


 2 - I nstalled Again :

 npm i prettier  

 then  Run the install script

  npm i --save-dev prettier.

 then  Installed ESLint

npm i --save-dev eslint

then Installed ESLint Config Prettier

npm i --save-dev eslint-config-prettier

 then Installed ESLint Prettier Plugin

npm i --save-dev eslint-plugin-prettier

then I  corrected in  "scripts": {

    "lint": "eslint src/**/*.ts ",
    "prettier": " prettier --config .prettierrc  src/**/*.ts  --write",

    }
then made run 

npm run lint

A message appeared like this:

WARNING: You are currently running a version of TypeScript which is not officially supported by @typescript-eslint/typescript-estree. 

You may find that it works just fine, or you may not.

SUPPORTED TYPESCRIPT VERSIONS: >=3.3.1 <4.8.0

YOUR TYPESCRIPT VERSION: 4.8.2

Please only submit bug reports when using the officially supported version.

=============
PS E:\the frist. project> npm run
********************************************************************
so I installed typescript 4.7

npm i --save-dev typescript@ 4.7






