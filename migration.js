const { sequelize } = require('./sequelize')


sequelize.sync().then(() => {
    console.log('Migration made successfully!');
    }).catch((error) => {
    console.error('Unable to create table : ', error);
});