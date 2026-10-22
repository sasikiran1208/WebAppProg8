
const http = require('http')

const hostname = process.env.hostname || '127.0.0.1'
const port = process.env.port || 3001

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Places I Would Like to Visit</title></head>')
    res.write('<body>')
    res.write('<h1>Places I Would Like to Visit</h1>')
    res.write('<p>There are many cities that I would love to visit in the future. The table below shows some of these cities and why I want to visit them.</p>')
    res.write('<table border="1">')
    res.write('<tr><th>City</th><th>Reason to Visit</th><th>Distance from Hyderabad</th><th>Travel Cost</th></tr>')
    res.write('<tr><td>Dubai</td><td>To see the Burj Khalifa</td><td>1,580 miles</td><td>$300</td></tr>')
    res.write('<tr><td>Paris</td><td>To see the Eiffel Tower</td><td>4,700 miles</td><td>$700</td></tr>')
    res.write('<tr><td>Tokyo</td><td>To experience Japanese culture</td><td>4,000 miles</td><td>$650</td></tr>')
    res.write('<tr><td>New York</td><td>To visit Times Square</td><td>8,000 miles</td><td>$900</td></tr>')
    res.write('</table>')
    res.end('</body></html>')
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
