function greeting(greetingHandler, name) {
    greetingHandler(name);
}

// const name = 'Hali mama';
// const numbers = [45, 43, 64];
// const laptop = {
//     name: 'Dell',
//     price: 43000,
//     memory: '8gb'
// }
function greetingHandler(name) {
    console.log('Good Morning', name);
}

greeting(greetingHandler);