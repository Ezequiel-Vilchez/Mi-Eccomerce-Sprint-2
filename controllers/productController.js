const productController = {
    
    login: (req, res) => {
        res.render('pages/login');
    },
    
    register: (req, res) => {
        res.render('pages/register');
    },
    procesarRegister: (req, res) => {
        res.redirect('pages/index');
    },
    checkout: (req, res) => {
        res.render('pages/checkout');
    },
    carrito: (req, res) => {
        res.render('pages/carrito');
    },
    
    index: (req, res) => {
        res.render('pages/index');
    },
    
    descripcion: (req, res) => {
        res.render('pages/descripcion');
    }
};

module.exports = productController;