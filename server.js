let express = require('express')
let app = express()
let exphbs = require('express-handlebars')
let path = require('path')
let helpers = require('./src/helpers')

// View engine
app.engine('.hbs', exphbs({
  extname: '.hbs', 
  defaultLayout: 'main',
  partialsDir: __dirname + '/src/components',
  helpers
}))
app.set('view engine', '.hbs')

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/ping', (req, res, next) => {
  res.json({status: 'pong'})
})

app.get('/', (req, res, next) => {
  res.render('index', {
    fruit: 'apple'
  })
})

app.get('/widget', (req, res, next) => {
  res.render('widget', {
    movies: [
      {title: 'Alien', year: 2000},
      {title: 'Jaws', year: 1990},
      {title: 'Gladiator', year: 2000},
      {title: 'Matrix', year: 1999},
    ]
  })
})


const PORT = 3000
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
})