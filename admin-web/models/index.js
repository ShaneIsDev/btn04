const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("mysql://root@127.0.0.1/thuc-pham-xanh",{
    host:"localhost",
    password: "admin",
});
const initModels = require("./init-models");

module.exports = initModels(sequelize);
