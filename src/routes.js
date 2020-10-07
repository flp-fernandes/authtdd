const routes = require('express').Router();
const { User } = require('./app/models');

User.create({
    name: 'Felipe2',
    email: 'hey2.felipao@gmail.com',
    password_hash: '2kkjjjaaakkllkss'
});

module.exports = routes;