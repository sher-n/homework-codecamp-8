const add = require("../mytest");

test('two plus two is four', () => {
    expect(add(2, 2)).not.toBe(3);
});

test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});
  
test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});

  
test('the shopping list has beer on it', () => {
    const shoppingList = [
        'kleenex',
        'trash bags',
        'beer',
    ];
    expect(shoppingList).toContain('beer');
});

test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    const value = {one: 1, two: 2};
    expect(data).toEqual(value);
});

test('object containing', () => {
    const data = {one: 1, two: 2};
    const value = {one: 1};
    expect(data).toEqual(expect.objectContaining(value));
});

function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
    expect(compileAndroidCode).toThrow();
    expect(compileAndroidCode).toThrow(Error);
  
    // You can also use the exact error message or a regexp
    expect(compileAndroidCode).toThrow('you are using the wrong JDK');
    expect(compileAndroidCode).toThrow(/JDK/);
});
