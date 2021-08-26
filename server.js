const app = require('express')();
const server = require('http').Server(app); 
const io = require('socket.io')(server);

app.get('/',(req, resp)=>{
    resp.sendFile(`${__dirname}/index.html`);
})

io.on('connection', function (socket){ 
    console.log('Je suis connecte');
 });

server.listen(3000, ()=>{
    console.log('Server started');
});