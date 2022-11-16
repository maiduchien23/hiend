const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()

// the following is needed to use views
app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// see the views/custom-layout.hbs for the contents 
// views/layout/custom.hbs forthe layout
app.get('/custom-layout', (req, res) =>
    res.render('custom-layout', { layout: 'cumtom' })
)

app.get('*', (req, res) => res.send('Check out our "<a href="/custom-layout">custom layout</a>" page !'))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`\nnavigate to http://localhost: ${port}/about\n`))