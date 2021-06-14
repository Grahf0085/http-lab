module.exports = rawRequest => {

  const data = rawRequest.toString(); //might not be needed

  const methodOne = data.split('\n')[0].split(' ')[0];

  const pathOne = rawRequest.split('\n')[0].split(' ')[1];

  const bodyOne = rawRequest.split('\n')[4];

  return {
    method: methodOne,
    path: pathOne,
    body: bodyOne
  };

};
