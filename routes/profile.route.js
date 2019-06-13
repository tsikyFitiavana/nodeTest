const express = require('express')
const routes = express.Router()
const pers = require('../controller/profile.controller');
routes.post('/profil', pers.create)
    .get('/profil/:profilId', pers.findOne)
    .put('/profil/:profilId', pers.update)
    .delete('/profil/:profilId', pers.delete)
    .get('/profil', pers.findAll);

module.exports = routes

    // app.get('/profil/:profilId', pers.findOne);
    // app.get('/user/:photo_profil', pers.lireImage);
    // app.put('/profil/:profilId', profil.update);
    // app.delete('/profil/:profilId', profil.delete);