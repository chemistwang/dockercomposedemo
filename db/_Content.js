//引入依赖
const mongoose = require('mongoose');

//定义模式
const Schema = mongoose.Schema;


let _Content = new Schema({
    'content': {type: String, default: ''}
},{timestamps:true});

//导出
module.exports = _Content;