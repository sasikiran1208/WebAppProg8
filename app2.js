const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')

  res.write('<html>')
  res.write('<head><title>My Programming Languages</title></head>')
  res.write('<body>')

  res.write('<h1>My Favorite Programming Languages</h1>')

  res.write('<table border="1" cellpadding="10">')
  res.write('<tr><th>Language</th><th>Used For</th><th>Difficulty</th></tr>')
  res.write('<tr><td>Python</td><td>Automation and Data</td><td>Easy</td></tr>')
  res.write('<tr><td>Java</td><td>Backend Applications</td><td>Medium</td></tr>')
  res.write('<tr><td>JavaScript</td><td>Web Development</td><td>Medium</td></tr>')
  res.write('<tr><td>C++</td><td>System Programming</td><td>Hard</td></tr>')
  res.write('</table>')

  res.end('</body></html>')
})

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the start
})