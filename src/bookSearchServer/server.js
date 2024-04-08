'use strict'
const http = require('node:http')
const url = require('node:url')
const router = require('find-my-way')()
const { Books } = require('../bookSearchDB/Books')

const hostname = '127.0.0.1'
const port = 3000

let cache = {}


function start(req, res) {
    const server = http.createServer((req, res) => {
   

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      
        // If it's an OPTIONS request, just return with 200 OK
        if (req.method === 'OPTIONS') {
          res.writeHead(200);
          res.end();
          return;
        }


        router.lookup(req, res)
    })

    server.listen(port, hostname, () => {
        console.log(`Server is running at http://${hostname}:${port}/`)
    })
}

router.on('GET', '/', (req, res, params) => {
    res.end('Hello World Node Server');
})

router.on('GET', '/books', (req, res, params) => {
  
    const reqQueryParams = url.parse(req.url, true).query

    console.log(reqQueryParams)

    if(reqQueryParams.format in cache) {
        return res.end(cache[reqQueryParams.format])
    }

    const data = responseFactory(reqQueryParams.format)
    cache[reqQueryParams.format] = data
    
    res.end(data)
})

function responseFactory(type = 'json'){
    console.log(type)
    switch(type) {
        case 'xml':
            return new Books().getXMLData()
        case 'json':
           return JSON.stringify(new Books().queryData())
        default:
            return new Error('Invalid data type')
    }

}

start()


