FROM node:12.16-slim
LABEL author="https://chemistwang.github.io"
ENV PORT=3333
WORKDIR /dockercomposedemo 
COPY . /dockercomposedemo
RUN npm install
EXPOSE ${PORT}
CMD node app


# 使用pm2进程守护 
# [官方文档](https://pm2.keymetrics.io/docs/usage/docker-pm2-nodejs/)

# FROM node:12.16-slim
# LABEL author="https://chemistwang.github.io"
# ENV PORT=3333
# WORKDIR /dockercomposedemo
# COPY . /dockercomposedemo
# RUN npm install pm2 -g
# RUN npm install
# EXPOSE ${PORT}
# CMD ["pm2-runtime", "app.js"]