const http = require('./app');
const port = process.env.PORT||3000;


http.listen(port, () => { 
    console.log('server on port ', port);
})