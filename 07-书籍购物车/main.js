const app = new Vue({
  el:'#app',
  data: {
    //这是一个books数组，里面的元素是对象：书本对象，包括各种信息属性
    books:[{
        id:1,
        name:'Snow White',
        dateTime:'2000-10',
        price:85.00,
        count:1
      },
      {
        id:2,
        name:'White',
        dateTime:'2000-10',
        price:85.00,
        count:1
      },
      {
        id:3,
        name:'Snow',
        dateTime:'2000-10',
        price:85.00,
        count:1
      },
      {
        id:4,
        name:'S White',
        dateTime:'2000-10',
        price:85.00,
        count:1
      },]
  },
  methods:{
    // getFinalPrice (price) {
    //   return '￥' + price.toFixed(2);
    // }
    decrement (index) {
      //这个思路是使减少按钮减少数量到0时不可再减少，但可以再点击
      // this.books[index].count <= 0? 0:this.books[index].count--;
      this.books[index].count--;
    },
    increment (index) {
      this.books[index].count ++;
    },
    removeHandler (index) {
      //数组截取方法从index索引开始算，截取1个元素（就是index索引代表的元素）
      this.books.splice(index,1);
    }
  },
  computed: {
    totalPrice () {
      let totalPrice = 0;

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
      //     totalPrice += item.price * item.count;
      // }
      // return totalPrice;


      // 4.reduce
      return  this.books.reduce(function (prevValue,book) {
        return prevValue + book.count * book.price
      },0)
    }
  },
  //过滤器,但是我觉得叫做数据处理器更体贴。用以在不改变的data 的情况下  输出前段需要的格式数据。
  filters:{
    showPrice (price) {
      return "￥" + price.toFixed(2);
    }
  }
})