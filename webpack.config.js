const path = require('path') //引入核心内置模块path,用户获取文件路径等
module.exports = {
  mode: 'production',
  entry: './src/main.js', // 打包入口：指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始
  output: {
    path: path.resolve(__dirname, 'dist'), //打包输出路径，必须是绝对路径 // 解析路径为 ./dist
    filename: 'blund.js' //打包之后的 JS 名称
  },
  resolve: {}, // 配置解析：配置别名、extensions 自动解析确定的扩展等等
  devServer: {}, // 开发服务器：run dev/start 的配置，如端口、proxy等
  module: {}, // 模块配置：配置loader（处理非 JavaScript 文件，比如 less、sass、jsx、图片等等）等
  plugins: [] // 插件的配置：打包优化、资源管理和注入环境变量
}
