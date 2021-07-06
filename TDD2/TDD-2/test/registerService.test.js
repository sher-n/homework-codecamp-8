const registerService = require("../services/register-service")();

const db = {
    user : {
        create: () => {
            return { 
                id : 2
            }
        }
    }
}

test('Username is not empty string.',async () => {

    const data = await registerService.userCreate(db, 'myusername', '12345', '12345' , 'g@g.com' , 'g@g.com' , 'P1234');
    expect(data.username).not.toEqual('');
    expect(data.username).toBeDefined();

});

test('UserId is defined',async () => {
    
    const data = await registerService.userCreate(db, 'myusername', '12345', '12345' , 'g@g.com' , 'g@g.com', 'P1234');

    expect(data.userId).toBeDefined();
    console.log(data)

});

test('if user input, username is empty, errorMessage should be set.',async () => {
    const data = await registerService.userCreate(db, '' , '12345', '12345' , 'g@g.com' , 'g@g.com' , '');

    expect(data.errorMessage).toEqual('Username should not be empty');

});

test('if username input, password is empty, errorMessage should be set.',async () => {
    const data = await registerService.userCreate(db, 'myusername' , '', '12345' , 'g@g.com' , 'g@g.com' , '');

    expect(data.errorMessage).toEqual('Password should not be empty');

});
test('if username input, confirm-password is empty errorMessage should be set.',async () => {
    const data = await registerService.userCreate(db, 'myusername' , '12345', '' , 'g@g.com' , 'g@g.com' , '');

    expect(data.errorMessage).toEqual('Confirm Password should not be empty');

});
test('if username input, email is empty errorMessage should be set.',async () => {
    const data = await registerService.userCreate(db, 'myusername' , '12345', '12345' , '' , 'g@g.com' , '');

    expect(data.errorMessage).toEqual('Email should not be empty');

});
test('if username input, confirm-email is empty errorMessage should be set.',async () => {
    const data = await registerService.userCreate(db, 'myusername' , '12345', '12345' , 'g@g.com' , '' , '12345');

    expect(data.errorMessage).toEqual('Confirm Email should not be empty');

});
test('if username input, member_no is empty errorMessage should be set.',async () => {
    const data = await registerService.userCreate(db, 'myusername' , '12345', '12345' , 'g@g.com' , 'g@g.com' , '');

    expect(data.errorMessage).toEqual('Member_no should not be empty');

});

test('If password and confirmpassword is not match,  errorMessage should be set.',async () => {
    const data = await registerService.userCreate(db, 'myusername' , '12345', '123456' , 'g@g.com' , 'g@g.com' , '1234');

    expect(data.errorMessage).toEqual('Password and confirmPassword is not match.');

});

test('If email is not match,  errorMessage should be set.',async () => {
    const data = await registerService.userCreate(db, 'myusername' , '12345', '12345' , 'g@g.com' , 'gg@g.com' , '12345');

    expect(data.errorMessage).toEqual('email is not match.');

});

test('If email is in the wrong format,  errorMessage should be set.',async () => {
    const data = await registerService.userCreate(db, 'myusername' , '12345', '12345' ,'gg.com' , 'gg.com' , '12345');

    expect(data.errorMessage).toEqual('Wrong email format');

});

test('If member_no is in the wrong format,  errorMessage should be set.',async () => {
    const data = await registerService.userCreate(db, 'myusername' , '12345', '12345' , 'g@g.com' , 'g@g.com' , '12345');

    expect(data.errorMessage).toEqual('Wrong member_no format');

});
