// 导入http内置模块
const http = require('http')
const urlModule = require('url')


//创建一个http服务器
const server = http.createServer()
// 监听http服务器的request请求
server.on('request',function (req, res ) {

  // const url = req.url
  const { pathname : url, query } = urlModule.parse(req.url,true)

  if (url === '/getscript') {
    // 拼接一个合法的js脚本，这里拼接的是一个方法的调用
    // var scriptStr = 'show()'
    const data = {
      name:'young',
      age : 18,
    }


    // 为避免写死方法用query来接收方法，然后用模板字符串接收query
    var scriptStr = `${query.callback}(${(JSON.stringify(data))})`
    // res.end 发送给客户端，客户端把这个 字符串， 当作js代码去解析执行
    res.end(scriptStr)
  }else {
    res.end('404')
  }
})

// 指定端口号并启动服务器监听
server.listen(3000,function () {
  console.log('server listen at http://127.0.0.1:3000')
})