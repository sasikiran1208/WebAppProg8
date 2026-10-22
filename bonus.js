
const http = require('http')

const hostname = '127.0.0.1'
const port = 3001
const ingredients = [
    { name: 'Strawberries', amount: 2, unit: 'cups' },
    { name: 'Flour', amount: 2, unit: 'cups' },
    { name: 'Sugar', amount: 0.5, unit: 'cup' },
    { name: 'Butter', amount: 0.5, unit: 'cup' },
    { name: 'Whipped Cream', amount: 1, unit: 'cup' }
]
const used = [false, false, false, false, false]

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    let index = Math.floor(Math.random() * ingredients.length)
    let count = 0

    while (used[index] && count < ingredients.length) {
        index = (index + 1) % ingredients.length
        count++
    }
    let response = '<html><head><title>Sasi Kiran - Strawberry Shortcake</title></head><body>'
    response += '<h1>Sasi Kiran lists an ingredient</h1>'
    response += '<h2>Strawberry Shortcake Ingredients</h2>'
    if (used.every(value => value === true)) {
        response += '<p>Nothing left</p>'
    } else {
        used[index] = true

        const item = ingredients[index]

        response += `<div>Ingredient Index: ${index}</div>`
        response += `<p>${item.name}: ${item.amount} ${item.unit}</p>`
    }

    response += '</body></html>'

    res.end(response)
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
