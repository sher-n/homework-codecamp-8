module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define("Owns",{

    }, {
        tableName : 'owns',
        timestamps: false
    })
    return model;
}