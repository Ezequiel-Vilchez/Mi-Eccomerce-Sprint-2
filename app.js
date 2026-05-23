
const express = require('express');
const session = require('express-session');
const app = express();
const productRoutes = require('./routes/productRoute');
const cartRoutes = require('./routes/cartRoute');


app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: false }));


app.use(session({
    secret: 'mi-ecommerce-secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));


app.use(express.static('public'));


app.use('/', productRoutes);
app.use('/cart', cartRoutes);


app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(3000, () => console.log("Server en linea 🫡"));