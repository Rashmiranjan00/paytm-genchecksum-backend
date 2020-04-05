const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
var indexRouter = require('./routes/index');
const bodyParser = require('body-parser');

const app = express()

// Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', indexRouter);
app.use(bodyParser.urlencoded({extended: true}), bodyParser.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));