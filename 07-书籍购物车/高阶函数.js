//编程范式：命令式编程/声明式编程
//编程范式：面向对象编程（第一公民：对象）/函数式编程（第一公民：函数）
//filter/map/reduce
//filter中的回调函数有一个要求，必须返回一个boolean值，即里面的内容是判断式
//true：当返回true时，函数内部会自动将本次回调的n加入到新的数组中
// false：当返回false时，函数内部会过滤掉这次的n
const nums = [10,20,111,222,40,444,5,888,102];

// let total = nums.filter(function (n) {
//   return n < 100;
// })


// let total = nums.map( function (n) {
//   return n * 2;
// })

// let total = nums.reduce(function (prevValue,n) {
//     return prevValue * n
// },1)


console.log(total)






// 1.普通的for循环
// //用for循环来让各个书本对象的价格和数量相乘再相加
// for (let i = 0; i < this.books.length; i++) {
//   totalPrice += this.books[i].price * this.books[i].count;
// }
// return totalPrice;

// 2.for (let i in this.books)
//这里的i是索引
// for (let i in this.books) {
//   totalPrice += this.books[i].price * this.books[i].count;
// }
// return totalPrice;

// 3.for (let i of this.books)
// 这里的i是数组里的元素
// for (let item of this.books) {
//   totalPrice += item.price * item.count;
// }
// return totalPrice;


// 4.reduce
// return this.books.reduce(function (prevValue,book) {
//      return prevValue = book.count * book.price
// },0)


//终极形态，链式编程：lambda
// let total = nums.filter(function (n) {
//   return n < 100;
// }).map(function (n) {
//   return n * 2;
// }).reduce(function (prevValue,n) {
//   return preValue + n
// },0)

// console.log(total);