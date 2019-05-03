const http = require('http');
const app = require('./app');
const port = 3000;

// http://18.218.184.115

const server = http.createServer(app);
server.listen(port, ()=>{
  console.log('Postman API');
});
