module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define("Customer" , {
        name: {
            type : DataTypes.STRInG(255)
        },
        age : {
            type: DataTypes.INTEGER
        }
    }, {
        tableName : "customers"
    });

    return model;
}