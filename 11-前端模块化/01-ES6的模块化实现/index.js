//1.导入的{}中定义的变量
import {flag,age} from './one.js';

if (flag) {
  console.log('work')
}

//2.直接导入export定义的变量
import {num1,weight} from './one.js';

console.log(num1);
console.log(weight)


//3.导入export的function
import {mul} from './one.js';

  console.log(mul(10,20))


// 4.导入export default中的内容,import后的名字自定义，指向default的导出内容
import  add from './one.js';

  add('hello')

// 5.统一全部导入as后的名字自定义，指向导出内容放入一个对象中
import * as aaa from './one.js';
//再通过对象属性方法应用
console.log(aaa.flag)