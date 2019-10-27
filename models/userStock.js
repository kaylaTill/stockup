const Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://root@localhost:3306/stockup');

const UserStock = sequelize.define('userStock', {
    symbol: {
        type: Sequelize.STRING,
        allowNull: false
    },
    companyName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    shares: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    user_id: {
        type: Sequelize.INTEGER
    }

}, {
    sequelize,
    modelName: 'userStock'
});


sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


// sync user model
UserStock.sync({ force: false }).then(() => {
    console.log('--------Synced to stock table--------');
});


module.exports = {UserStock};