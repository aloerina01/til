// import '@babel/polyfill';

// import extra from './extra';

// require("core-js/modules/es6.string.includes");

// import 'core-js/modules/es6.string.includes';

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
  n = 'includes';
  console.log(value[n]);
}
// この関数が呼び出されていなくても、arrayとstringのincludesのpolyfillが入る


console.log('\n------verify 4-------');
const callFunc = (funcName) => {
  _value = {};  // funcNameにかかわらず、_valueの定義の仕方で挙動が変わる
  console.log(_value[funcName]);
}
const getFuncName = () => {
  return 'includes';
}
callFunc('includes');
callFunc('inclu' + 'des');
callFunc(getFuncName());


