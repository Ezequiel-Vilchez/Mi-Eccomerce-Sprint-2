const fs = require('fs');
const path = require('path');

function getProductos() {
    const filePath = path.join(__dirname, '../data/productos.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}

function initCart(req) {
    if (!req.session.cart) {
        req.session.cart = [];
    }
}

const verCarrito = (req, res) => {
    initCart(req);
    const productos = getProductos();

    const items = req.session.cart.map(item => {
        const producto = productos.find(p => p.id === item.productId);
        return {
            productId: item.productId,
            quantity: item.quantity,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
            subtotal: producto.precio * item.quantity
        };
    });

    const total = items.reduce((acc, item) => acc + item.subtotal, 0);

    res.render('pages/carrito', { items, total });
};

const agregarProducto = (req, res) => {
    initCart(req);

    const productId = parseInt(req.params.id);
    const itemExistente = req.session.cart.find(item => item.productId === productId);

    if (itemExistente) {
        itemExistente.quantity += 1;
    } else {
        req.session.cart.push({ productId, quantity: 1 });
    }

    res.redirect('/cart');
};

const aumentarCantidad = (req, res) => {
    initCart(req);

    const productId = parseInt(req.params.id);
    const item = req.session.cart.find(item => item.productId === productId);

    if (item) {
        item.quantity += 1;
    }

    res.redirect('/cart');
};

const disminuirCantidad = (req, res) => {
    initCart(req);

    const productId = parseInt(req.params.id);
    const index = req.session.cart.findIndex(item => item.productId === productId);

    if (index !== -1) {
        req.session.cart[index].quantity -= 1;

        if (req.session.cart[index].quantity <= 0) {
            req.session.cart.splice(index, 1);
        }
    }

    res.redirect('/cart');
};

const vaciarCarrito = (req, res) => {
    req.session.cart = [];
    res.redirect('/cart');
};

module.exports = {
    verCarrito,
    agregarProducto,
    aumentarCantidad,
    disminuirCantidad,
    vaciarCarrito
};