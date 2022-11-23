//Create my middleware logger,  in a separate file.
//and I add logger to my response and request parameters of the callback function.
// The only requirement for the middleware was that it logs something to console when the endpoint is reached.

import express from 'express';

function logger(
  req: express.Request,

  res: express.Response,

  // eslint-disable-next-line @typescript-eslint/ban-types
  next: Function
): void {
  const url = req.url;
  console.log(`${url} was visited`);

  next();
}

export default logger;
