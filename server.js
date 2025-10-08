require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());
const path = require('path');
const hbs = require('hbs');

app.set('views' , path.join(__dirname , 'views'));
app.set('view engine' , 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.set('view options' , {
    layout: 'layout'
})

app.use('/exercises', require('./routes/exercisesRoutes'));

app.get('/', (req, res) => {
    res.render('index');
});

hbs.registerHelper('eq', function(a, b) {
  return a === b;
});

app.use((req, res) => res.status(404).send('Not Found'));

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})