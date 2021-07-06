module.exports = function() {
    return {
        async userCreate(db , username , password, confirm_password , email , confirm_email, member_no ) { // password, confirm_password , email , confirm_email, member_no
            if (username == "") {
                return {
                    errorMessage : 'Username should not be empty'
                }
            }
            if (password == "") {
                return {
                    errorMessage : 'Password should not be empty'
                }
            }
            if (confirm_password == "") {
                return {
                    errorMessage : 'Confirm Password should not be empty'
                }
            }
            if (email == "") {
                return {
                    errorMessage : 'Email should not be empty'
                }
            }
            if (confirm_email == "") {
                return {
                    errorMessage : 'Confirm Email should not be empty'
                }
            }
            if (member_no == "") {
                return {
                    errorMessage : 'Member_no should not be empty'
                }
            }
            if (password !== confirm_password) {
                return {
                    errorMessage : 'Password and confirmPassword is not match.'
                }
            }
            if (email !== confirm_email) {
                return {
                    errorMessage : 'email is not match.'
                }
            }

            if (email.search('@') == -1) {
                return {
                    errorMessage: 'Wrong email format'
                }
            }

            if (member_no.substr(0,1).match(/[A-Z]/g) == null) {
                return {
                    errorMessage: 'Wrong member_no format'
                }
            }

         
            const user = await db.User.create({
                username : username,
                password : password,
                email : email,
                member_no : member_no
            })
     
            return {
                errorMessage: '',
                userId: user.id,
                username : username
            };
        }
    }
}