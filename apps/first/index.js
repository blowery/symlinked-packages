const react = require('react');
const amazing = require('amazing');

console.log( 'local react: %s', react.version );
console.log( 'amazing react: %s', amazing.react.version );

console.log( 'same instance? %s', react === amazing.react ? 'Yes' : 'Nope' );