export default class UnimportModule {
  constructor() {
    this._values = ['aaa', 'bbbb', 'ccccc'];
    for (let i = 0; i < 10; i++) {
      this._values = this._values.concat(this._values);
    }
    this._values.forEach(each => console.log(each));
  }
}