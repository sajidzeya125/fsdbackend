const http=require('http');
const fs=require('fs/promises');
const server=http.createServer(async(req,res)=>{
    res.writeHead(200,{'content-type':'application/json'});
    if(req.url==='/setdata' && req.method==='POST'){
        let body='';
        req.on('data',chunk=>{
            body+=chunk;
        });
        req.on('end',()=>{
            const user=JSON.parse(body);
            users.push(user);
            res.end("Data Recieved");
        });
    }
    else if(req.url==='/getdata' && req.method==='GET'){
        const data=await fs.readFile("/data")
        res.end(JSON.stringify(users));
    }
    else{
        res.end('Not Found');
    }
});
server.listen(9000,()=>{
    console.log('Server is running on port 9000');
});