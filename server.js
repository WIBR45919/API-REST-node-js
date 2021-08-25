const http = require('http')

http.createServer((req, resp) => {

    resp.writeHead(200, 'utf-8',{
        'Content-Type': 'text/html',
        'Content-Length': 300
    });

    resp.end('Je suis dans la place')
}).listen(3000, ()=>{
    console.log('Server start at port 3000');
})