FROM node:12.16-slim
LABEL author="https://chemistwang.github.io"
ENV PORT=3333
# 在
WORKDIR /dockercomposedemo 
COPY . /dockercomposedemo
RUN npm install
EXPOSE ${PORT}
CMD node app



