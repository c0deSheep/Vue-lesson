const app = new Vue({
  el:'#app',
  data: {
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
      // this.books[index].count <= 0? 0:this.books[index].count--;
      this.books[index].count--;
    },
    increment (index) {
      this.books[index].count ++;
    },
    removeHandler (index) {
      this.books.splice(index,1)
    }
  },
  computed: {
    totalPrice () {
      let totalPrice = 0;
      for (let i = 0; i < this.books.length; i++) {
        totalPrice += this.books[i].price * this.books[i].count;
      }
      return totalPrice;
    }
  },
  //过滤器,但是我觉得叫做数据处理器更体贴。用以在不改变的data 的情况下  输出前段需要的格式数据。
  filters:{
    showPrice (price) {
      return "￥" + price.toFixed(2);
    }
  }
})