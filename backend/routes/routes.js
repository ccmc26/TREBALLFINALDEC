// routes.js
const usersAPIroutes = require('./API/userAPI.js');
const tipoProductoAPIroutes = require('./API/tiposProdAPI.js');
const productAPIroutes = require('./API/productAPI.js');

const setupRoutes = (app) => {
    // Aquí configuras todas las rutas necesarias
    app.use('/api/users', usersAPIroutes);
    app.use('/api/tipos', tipoProductoAPIroutes);
    app.use('/api/productos', productAPIroutes);
    // app.use('/users');
    // app.use('/productos');
};

module.exports = setupRoutes;
