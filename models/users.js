const Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://root@localhost:3306/stockup');

const User = sequelize.define('user', {
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'user'
});


//test connection to db
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


// sync user model
User.sync({ force: false }).then(() => {
    console.log('-------Synced to user table-------');
});


module.exports = User;