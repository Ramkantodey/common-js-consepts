// array like object
function sum(a, b, c) {
    console.log(arguments);
    const result = a + b + c;
    return result;
}

const total = sum(2, 2, 2);
console.log(total);