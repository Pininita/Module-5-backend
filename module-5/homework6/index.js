import http from 'http';
import 'dotenv/config'

const port = process.env.PORT;
console.log(port);

const products = JSON.stringify([
    { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
    { id: 2, name: 'Chair', price: 49.99, category: 'Furniture' },
    { id: 3, name: 'Pen', price: 1.99, category: 'Stationery' }
])

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    switch (req.url) {
        case '/':
            res.write('estas en el home')
            break

        case '/products':
            res.write(products)


            default:
                res.write('error 404: not found')
    }
    res.end()

}).listen(port)

