# 2018/11/08

babel7.xの設定ファイルの挙動の検証。babel-cliから実行した場合とbabel-loaderから実行した場合でbabelの設定ファイルの読み込み方・指定の仕方などに変化がないかを確認する。

### Usage

```shell
npm install
npm start
```

`build_and_run.sh`に実行権限が付与されてなければ付与してから実行する。

```shell
chmod +x ./build_and_run.sh
npm start
```

### ハマったこと

* うっかり`babel-cli`インストールしてたけど、v7は`@babel/cli`
* 同様にpolyfillは`@babel/polyfill`