import '@babel/polyfill';
import Executor from './Executor';
import { microTask } from './Utils';

const executor = new Executor('aloerina', 'Thank you');
microTask(() => executor.execute());