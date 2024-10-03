import http from 'node:http'


const PORT = 1000

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        'Content-Type': 'plain-text'
    })
    res.end(JSON.stringify('this is the end'))
})


server.listen(PORT, () => console.log('we are live on Kwabena TV😂'))

console.log(server.listening, server.listeners())
