const express = require('express');
const port = 3000;
var userRoute = require('./router/user.router');

const app = express();  
app.set('view engine', 'pug')
app.set('views', './views') 
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(express.static('public'));

app.get('/', (request, response) => {
    response.render('index', {
        name: 'Phong'
    })  
});

app.get('/about', (req, res) => {
    res.render('about')
});

app.use('/users', userRoute);

app.listen(port, () => {
    console.log("Express server on listening: " + port)
})