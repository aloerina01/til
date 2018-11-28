# 2018/11/28

@babel/polyfillと`useBuiltIns`オプションの挙動を検証する。

### 準備
3つのbabel.config.jsを用意。

* `babel.config.plain.js` ... useBuiltIns = false
* `babel.config.entry.js` ... useBuiltIns = entry
* `babel.config.usage.js` ... useBuiltIns = usage

### 結果 babelのみ実行

1ファイルをbabeっただけだとplainとentryは同じ結果を吐き出した。usageはたしかに利用するpolyfillだけをimportしてた。

usageでちょっとおもしろい結果が出た。
```js
const abstract = [new Array(), new Object()];
console.log(abstract[1].findIndex);
```
この場合はarrayのfindIndexがimportされたけど、

```js
const a = {
  findIndex: () => {}
}
console.log(a.findIndex);
```
この場合はimportされなかった。

どっちもArray.prototype.findIndexを実行してないけど、実行される可能性のある上はちゃんとfindIndexが入ってた。ちなみにArray関連のpolyfillが全部入ったわけではなくて、ちゃんとfindIndexを狙い撃ちしてた。

### 結果 webpack/babel-loaderで実行
