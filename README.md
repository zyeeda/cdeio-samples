# 快速搭建环境
cd colorvest-samples

npm install

npm install -g bower

bower install

ln -s node_modules/fis/bin/fis fis

编译 ./fis release -op 

服务启动 ./fis server start

本地发布 ./fis release -op --dest local

# 标准搭建环境

## fis & 插件安装

npm install -g fis

npm install -g fis-parser-sass

npm install -g fis-postpackager-autoload

npm install -g fis-postpackager-simple


## bower & 库安装

npm install -g bower

cd colorvest

bower install


## 编译 & 运行

cd colorvest-samples

fis release -op

fis server start

## 打包 & 发布
fis release -op --dest local
