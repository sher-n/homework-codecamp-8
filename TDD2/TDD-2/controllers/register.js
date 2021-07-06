const registerService = require('../services/register-service')();
const db = require('../models');

module.exports = function() {
    return {
        async registerCompleted(req, res, next) {
            const { username , password, confirm_password , email , confirm_email, member_no } = req.body;
            const dataSend = await registerService.userCreate(db, username , password, confirm_password , email , confirm_email, member_no );
            
            res.render('register_result', dataSend);

            next();
        }
    }
};