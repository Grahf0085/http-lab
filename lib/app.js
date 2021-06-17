const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');
// const readIndex = require('../promises');
const fsPromises = require('fs').promises;

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());
    // socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    
    const { body, path, method } = request;

    if((path === '/') && (method === 'GET')) {
      socket.write(
        createResponse({
          body: 'hi',
          contentType: 'plain text'
        })
      );
    }

    // else if(path === '/index.html') {
    //   return readIndex(path)
    //     .then(content => socket.write(createResponse({ body: content })))
    //     .catch(err => {
    //       console.log(err);
    //     });
    // } 

    else if(path === '/index.html') {
      fsPromises.readFile('./public/index.html', 'utf8')
        .then((content => socket.write(createResponse({ body: content }))))
        .catch(err => {
          console.log(err);
          socket.write(createResponse({ body: 'File Not Found', status: 404, contentType: 'text/plain' }));
        });
    }

    else if((path === '/echo') && (method === 'POST')) {
      socket.write(
        createResponse({
          body,
          status: '200',
          contentType: 'plain text'
        })
      );

    }

    else if((path === '/red') && (method === 'GET')) {
      socket.write(
        createResponse({
          body: '<h1>red</h1>',
          contentType: 'text/html'
        })
      );

    }
      
    else if((path === '/green') && (method === 'GET')) {
      socket.write(
        createResponse({
          body: '<h1>green</h1>',
          contentType: 'text/html'
        })
      );
    }

    else if((path === '/blue') && (method === 'GET')) {
      socket.write(
        createResponse({
          body: '<h1>blue</h1>',
          contentType: 'text/html'
        })
      );
    }

    else socket.write(
      createResponse({
        body:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>You're Lostt</title>
</head>
<body>
  <h1>You're Lost</h1>
</body>
</html>`,
        status: 404,
        contentType: 'text/html'
      })
    );

  });
});

module.exports = app;
