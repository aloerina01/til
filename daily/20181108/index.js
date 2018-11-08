import '@babel/polyfill';

class Executor {
  constructor(myName, ...messages) {
    this._name = myName || '';
    this._messages = ['Hello', 'Good morning', 'See you', ...messages];
  }
  get messages() {
    return this._messages;
  }
  get name() {
    return this._name;
  }
  execute() {
    const message = this.messages.find(each => each.includes('Hello'));
    console.log(`${message}, ${this.name} !!`);
  }
}

function microTask(f) {
  return Promise.resolve().then(f);
}

const executor = new Executor('aloerina', 'Thank you');
microTask(() => executor.execute());