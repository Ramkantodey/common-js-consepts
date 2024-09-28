/**
 * Truthy:
 * 1.  true
 * 2. any number (+ve, -ve) will be truthy other then 0
 * 3. any string other then empty string
 * {}
 * []
 * 
 * Falsy:
 * 1. false
 * 2. 0
 * 3. '' (empty string)
 * 4. undefined
 * 5. null
 */
const x = [2, 5];
if (x) {
    console.log('value of x is truthy');
}
else {
    console.log('value of x is falsy');
}

//optional
//check falsy
const y = null;
if (!y) {
    console.log('value is falsy');
}

//check truthy
const z = ' '
if (!!x) {
    console.log('value is truthy');
}