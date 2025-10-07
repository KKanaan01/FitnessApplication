require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());
const path = require('path');

app.set('views' , path.join(__dirname , 'views'));
app.set('view engine' , 'hbs');

app.set('view options' , {
    layout: 'layout'
})

app.use('/exercises', require('./routes/exercisesRoutes'));

app.get('/', (req, res) => {
    res.render('index');
});


app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})