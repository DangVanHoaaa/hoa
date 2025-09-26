const express = require('express');
const database = require('./config/database');
require('dotenv').config();


database.connectDatabase();
const app = express();
const port = process.env.PORT;

app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/publish'));
app.get('/', (req, res) => {
    res.render('client/home/index', { books: [], bestsellers: [] });
});


app.listen(port, () => {
    console.log(port);
})