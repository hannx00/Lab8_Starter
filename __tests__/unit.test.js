// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// phoneNumber
test('is phonenumber 911', () => {
    expect(functions.isPhoneNumber(911)).toBe(false);
});

test('is phonenumber fruity', () => {
    expect(functions.isPhoneNumber("fruity")).toBe(false);
});

test('is phonenumber 818-818-8188', () => {
    expect(functions.isPhoneNumber("818-818-8188")).toBe(true);
});

test('is phonenumber 000-000-0000', () => {
    expect(functions.isPhoneNumber("000-000-0000")).toBe(true);
});


// isEmail
test('isEmail 911', () => {
    expect(functions.isEmail("911")).toBe(false);
});

test('isEmail hahe@@', () => {
    expect(functions.isEmail("hahe@@")).toBe(false);
});

test('isEmail abc@gmail.com', () => {
    expect(functions.isEmail("abc@gmail.com")).toBe(true);
});

test('isEmail abc@yahoo.com', () => {
    expect(functions.isEmail("abc@yahoo.com")).toBe(true);
});

// isStrongPassword

test('isStrongPassword ^_^~', () => {
    expect(functions.isStrongPassword("^_^~")).toBe(false);
});

test('isStrongPassword apestogetherstrong', () => {
    expect(functions.isStrongPassword("apestogetherstrong")).toBe(false);
});

test('isStrongPassword good_pw', () => {
    expect(functions.isStrongPassword("good_pw")).toBe(true);
});

test('isStrongPassword verygoodpw00_', () => {
    expect(functions.isStrongPassword("verygoodpw00_")).toBe(true);
});

// isDate
test('isDate ^_^~', () => {
    expect(functions.isDate("^_^~")).toBe(false);
});

test('isDate 12/20/2222', () => {
    expect(functions.isDate("12/20/2222")).toBe(true);
});

test('isDate 00 / 00 / 0000', () => {
    expect(functions.isDate("00 / 00 / 0000")).toBe(false);
});

test('isDate 00/00/0000', () => {
    expect(functions.isDate("00/00/0000")).toBe(true);
});

// isHexColor
test('isHexColor #FFCC00', () => {
    expect(functions.isHexColor("#FFCC00")).toBe(true);
});

test('isHexColor #FC0', () => {
    expect(functions.isHexColor("#FC0")).toBe(true);
});


test('isHexColor #FCAQEC', () => {
    expect(functions.isHexColor("#FCAQEC")).toBe(false);
});

test('isHexColor #xyz', () => {
    expect(functions.isHexColor("#xyz")).toBe(false);
});