const http = require('http')
const fs = require('fs')
const port = process.env.PORT || 3000
function serveStaticFile(res, path, contentType,
    responseCode = 200) {
    fs.readFile(__dirname + path, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' })
            return res.end('500 - Internal Error')
        }
        res.writeHead(responseCode, { 'Content-Type': contentType })
        res.end(data)
    })
}
const server = http.createServer((req, res) => {
    // normalize url by removing querystring, optional trailing slash, and
    // making lowercase
    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
    switch (path) {
        case '':
            serveStaticFile(res, '/public/home.html', 'text/html')
            break
        case '/blog':
            serveStaticFile(res, '/public/blog.html', 'text/html')
            break
        case '/product':
            serveStaticFile(res, '/public/product.html', 'text/html')
            break
        case 'ch01/public/img/img.png':
            serveStaticFile(res, 'ch01/public/img/img.png', 'image/png')
            break

        default:
            serveStaticFile(res, '/public/404.html', 'text/html', 404)
            break
    }
})
server.listen(port, () => console.log(`server started onport ${port}; ` + 'press Ctrl-C to terminate....'))