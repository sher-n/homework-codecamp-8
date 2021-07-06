module.exports = (sequelize, Datatypes) => {
    const model = sequelize.define('User', {
        username : {
            type : Datatypes.STRING
        },
        password : {
            type : Datatypes.STRING
        },
        email : {
            type : Datatypes.STRING
        },
        member_no : {
            type : Datatypes.STRING
        },
    }, {
        tableName: 'users',
        timestamps: false
    });

    return model;
}