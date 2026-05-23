const productsService = require('../services/productsService');

const productController = {

    login: (req, res) => {
        res.render('pages/login');
    },

    register: (req, res) => {
        res.render('pages/register');
    },

    procesarRegister: (req, res) => {
        res.redirect('/index');
    },

    checkout: (req, res) => {
        res.render('pages/checkout');
    },

    index: (req, res) => {
        try {
            const sugeridos = productsService.getSugeridos();
            const top10 = productsService.getMasPedidos();

            res.render('pages/index', {
                topProducts: top10,
                sugeridos: sugeridos
            });

        } catch (error) {
            console.error("Error cargando los productos en la Home:", error);
            res.render('pages/index', {
                topProducts: [],
                sugeridos: []
            });
        }
    },

    descripcion: (req, res) => {
        const productId = parseInt(req.params.id);
        const productoPrincipal = productsService.getById(productId);

        if (!productoPrincipal) {
            return res.status(404).send('No se encontro el producto');
        }

        const relacion = productsService.getRelated(productoPrincipal.categoria, productId);

        res.render('pages/descripcion', {
            producto: productoPrincipal,
            relacion: relacion
        });
    }

};

module.exports = productController;