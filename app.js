const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoute');


app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use ('/', productRoutes);
app.use(express.urlencoded({ extended: false }));


app.use((req, res) => {
    res.status(404).send('404 Not Found');
});



app.listen(3000, () => console.log("Server en linea 🫡"));