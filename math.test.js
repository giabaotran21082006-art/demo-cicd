const add = require('./math');
test('Kiểm tra phép cộng 1 + 2 phải bằng 3', () => {
    expect(add(1, 2)).toBe(3);
});
