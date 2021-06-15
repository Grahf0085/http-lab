module.exports = rawRequest => {

  const methodOne = rawRequest.split('\n')[0].split(' ')[0];

  const pathOne = rawRequest.split('\n')[0].split(' ')[1];

  const bodyOne = rawRequest.split('\r\n\r\n')[1];

  return {
    method: methodOne,
    path: pathOne,
    body: bodyOne
  };

};
