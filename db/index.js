//引入依赖
// 第三方组件
const mongoose = require('mongoose');

// 配置文件
const CONFIG = require('../config');

// 数据库验证信息
const options = {
    user: CONFIG.DB_USER,
    pass: CONFIG.DB_SECRET,
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
};

//连接数据库
// let url = `mongodb://127.0.0.1/${CONFIG.DB_NAME}`;
let url = `mongodb://${CONFIG.DOCKER_MONGONAME}/${CONFIG.DB_NAME}`;

mongoose.connect(url, options);
//导出对象
const DB = () => { };

DB.User = mongoose.model('User', require('./_User')); // 用户表
DB.Content = mongoose.model('Content', require('./_Content')); //内容表 

//导出
module.exports = DB;
