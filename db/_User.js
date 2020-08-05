//引入依赖
const mongoose = require('mongoose');

//定义模式
const Schema = mongoose.Schema;


let _User = new Schema({
    'name': {type: String, default: ''}
},{timestamps:true});

//导出
module.exports = _User;