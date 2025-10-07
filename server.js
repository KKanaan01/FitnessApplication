require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());

app.use('/exercises', require('./routes/exercisesRoutes'))

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})