module.exports = ({ body = '', contentType = 'text/html', status = '200 OK' }) => {

  return ('HTTP/1.1 ' + status + '\n' + 'Accept-Ranges: bytes' + '\n' + 'Content-Length: 17' + '\n' + 'Content-Type: ' + contentType + '\r' + '\n' + '\r' + '\n' + body);
  

};
