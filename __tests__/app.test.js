/* eslint-disable indent */
const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {

  it('test home', async() => {

    const res = await request(app).get('/');

    expect(res.text).toEqual('hi');
    expect(res.type).toEqual('plain text');
  });

  it('test echo', async() => {

    const res = await request(app).get('/echo');

    expect(res.text).toEqual('bye');
    expect(res.statusCode).toEqual(200);
    expect(res.type).toEqual('plain text');
  });

  it('test red', async() => {

    const res = await request(app).get('/red');

    expect(res.text).toEqual('<h1>red</h1>');
  });

  it('test green', async() => {

    const res = await request(app).get('/green');

    expect(res.text).toEqual('<h1>green</h1>');
  });

  it('test blue', async() => {

    const res = await request(app).get('/blue');

    expect(res.text).toEqual('<h1>blue</h1>');
  });

  it('test nothing found', async() => {

    const res = await request(app).get('/bidsf/sdfsaf/sdf');

    expect(res.text).toEqual(
// eslint-disable-next-line indent
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
</html>`);
  });


});
