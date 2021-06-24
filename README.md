# docker-compose 编排案例

使用docker-compose单机编排node+mongo+redis案例

### 1. 目录结构说明

``` yaml
├── Dockerfile     # node应用docker文件
├── LICENSE
├── README.md
├── app.js         
├── config.js       # 配置信息
├── db
│   ├── _Content.js # 自定义内容表
│   ├── _User.js    # 自定义用户表
│   └── index.js    # 导出DB
├── docker-compose.yml # docker-compose 编排文件
├── init-mongo.js   # 初始化mongo数据库
├── package-lock.json
├── package.json
└── public
    └── index.html  # 静态页面
```

### 2. 启动应用

``` bash
# 启动之前修改docker-compose.yml文件中自己挂载卷volumes的路径

docker-compose up -d #后台启用，在浏览器中输出localhost:3333访问
```

### 3. 停止应用

``` bash
docker-compose down #停止当前的服务并移除容器以及配置文件中的网桥（推荐用此方法停止应用）
```

### 4. 更新启动

``` bash
docker-compose up -d --build # --build 不会使用docker缓存
```

### 5. 几点说明

- `Dockerfile`中基础镜像使用 `node:12.16-slim`,精简版的node环境,可以使镜像包的体积缩小
- 连接`mongo`和`redis`的时候其连接名必须和`docker-compose`中的编排的服务文件名`(eg: yourmongoname, yourredisname)`保持一致
- `wait-for-it.sh` 是为了防止 `node` 服务先于 `mongo` 启动，导致 `node` 连接数据库报错