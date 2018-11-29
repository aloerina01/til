// import '@babel/polyfill';

// import extra from './extra';

console.log('\n------verify 1-------');
const obj = {
  a: new Array(),
  b: new Promise(resolve => resolve()),
  c: Array
}

for (const each in obj) {
  console.log(`${obj[each]}                   :`, obj[each]);
  console.log(`${obj[each]}.prototype.find    :`, obj[each].find);
  console.log(`${obj[each]}.prototype.finally :`, obj[each].finally);
  console.log(`${obj[each]}.isArray           :`, obj[each].isArray);
}
// すべてpolyfillが入った

console.log('\n------verify 2-------');
console.log(eval('new WeakSet()')); // さすがにevalの中身のpolyfillはusage効かなかった
// console.log(new WeakSet());



// // console.log('\n------verify 2-------');
// // const array = ['aaa', 'bbb', 'ccc'];
// // console.log(array.find(each => each.includes('a')));

// console.log('\n------verify 3-------');
// const abstract = [null, { findIndex: () => 'dummy func' }, [], 1];
// console.log(abstract[0]);
// console.log(abstract[1].findIndex);

// extra();
