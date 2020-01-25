let name = 'young',
    age = 23,
    flag = true;

function sum(num1,num2) {
  return num1 + num2;
}

if (flag) {
  console.log(sum(20,30))
}

//导出方式一,先在上面定义，再导出
export {
  name,
    flag,
    age
}

//导出方式二，直接定义+导出
export let num1 = 1000;
export let weight  = 70;


//导出函数/类
export function mul(num1,num2) {
  return num1 + num2;
}


//导出默认值
export default function (argument) {
  console.log(argument)
}
