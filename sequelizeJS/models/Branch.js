module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Branch', {
        name: {
            type: DataTypes.STRING(255),
        },
        size: {
            type: DataTypes.STRING(3)
        }
    },{
        tableName: 'branches'
    });

    return model;
}