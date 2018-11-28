// import '@babel/polyfill';

import extra from './extra';

console.log('\n------verify 1-------');
console.log(Array.prototype.find);


// console.log('\n------verify 2-------');
// const array = ['aaa', 'bbb', 'ccc'];
// console.log(array.find(each => each.includes('a')));

console.log('\n------verify 3-------');
const abstract = [null, { findIndex: () => 'dummy func' }, [], 1];
console.log(abstract[0]);
console.log(abstract[1].findIndex);

extra();