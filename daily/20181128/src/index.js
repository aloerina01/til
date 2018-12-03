// import '@babel/polyfill';

// import extra from './extra';

// console.log('\n------verify 1-------');
// const obj = {
//   a: new Array(),
//   b: new Promise(resolve => resolve()),
//   c: Array
// }

// for (const each in obj) {
//   console.log(`${obj[each]}                   :`, obj[each]);
//   console.log(`${obj[each]}.prototype.find    :`, obj[each].find);
//   console.log(`${obj[each]}.prototype.finally :`, obj[each].finally);
//   console.log(`${obj[each]}.isArray           :`, obj[each].isArray);
// }
// すべてpolyfillが入った

console.log('\n------verify 2-------');
console.log(eval('new WeakSet()')); // さすがにevalの中身のpolyfillはusage効かなかった
// console.log(new WeakSet());



console.log('\n------verify 3-------');
const func = value => {
  console.log('value:', value);
  console.log(value.includes); // この行を有効化した時点で、引数に何が来ようとarrayとstringのindludeがimportされる
}
const num = 1;
const arr = [];
const rand = [{}, 'str', []][Math.floor(Math.random() * 3)];
func(num);
func(arr);
func(rand);

// extra();
