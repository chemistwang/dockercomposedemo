const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const {
    REDIS_NAME,
    DOCKER_REDISNAME
} = require('./config');

//redis
const Redis = require('ioredis');
const redisConfig = {
    port: 6379, // Redis port
    // host: "127.0.0.1", // Redis host
    host: DOCKER_REDISNAME, // Redis host
}
const redis = new Redis(redisConfig);

//mongo
const {
    User,
    Content
} = require('./db')



app.use(express.static('public'))
app.use(bodyParser.json());


//提交表单
app.post('/submit', async(req,res) => {
    let {value} = req.body;
    try {
        let rkey = `${REDIS_NAME}:temp:${value}`;
        await redis.set(rkey, value);
        return res.json({success: true,msg: '提交redis成功'});
    } catch (error) {
        return res.json({success: false, msg: '写入失败'});
    }
})

//提交表单
app.post('/mongo', async(req,res) => {
    let {valueName, valueContent} = req.body;

    try {
        await new User({'name': valueName}).save();
        await new Content({'content': valueContent}).save();
        return res.json({success: true,msg: '提交mongo成功'});
    } catch (error) {
        return res.json({success: false, msg: '写入mongo失败'});
    }
})



let port = 3333;

app.listen(port, () => {
    console.log(`the docker node is listening on ${port}`);
})