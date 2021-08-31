const app = require('express')();
const server = require('http').Server(app); 
const io = require('socket.io')(server);


// variable

let username = '';

app.get('/',(req, resp)=>{
    resp.sendFile(`${__dirname}/index.html`);
})

io.on('connection', function (socket){ 
    // 
    socket.on('message', (elt)=>{
        username = elt;
        socket.emit('receive', username);
    })
 });

server.listen(3000, ()=>{
    console.log('Server started');
});