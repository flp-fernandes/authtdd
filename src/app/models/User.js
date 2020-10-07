const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: DataTypes.STRING, 
        email: DataTypes.STRING,
        password_hash: DataTypes.STRING,
    }); // model's name, not table name

    return User;
}