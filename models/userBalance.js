const Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://root@localhost:3306/stockup');

const UserBalance = sequelize.define('userBalance', {
    user_balance: {
        type: Sequelize.FLOAT,
        allowNull: false

    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false

    }

}, {
    sequelize,
    modelName: 'userBalance'
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
UserBalance.sync({ force: false }).then(() => {
    console.log('--------Synced to Balance table--------');
});


module.exports = {UserBalance};