
# 部署 zyeeda-cdeio-samples

## 配置 mysql
默认的数据库是mysql的cdeio-examples库, 用户名密码都是root
可以在`src/main/webapp/WEB-INF/jetty-env.xml`文件中修数据库设置

## 运行 cdeio-samples

* 将 colorvest 的 cdeio 文件夹链接到 scripts 目录下

* 将 cdeio-samples\src\main\java 文件夹链接到 cdeio-samples\src\main\webapp\WEB-INF\classes 目录下

* 将 cdeio-samples\src\main\resources\bpmn 文件夹链接到 cdeio-samples\src\main\webapp\WEB-INF\classes 目录下

* `mvn jetty:run`

* 访问  https://localhost:7000/cdeio-samples

## r.js 压缩
安装 npm install -g requirejs ，然后cd 到项目下执行 r.js -o src/main/webapp/webapp-built.js  就会生成 webapp-build 目录。把原来的webapp备份，  webapp-build 改成 webapp。 重新 mvn jetty:run 

> 注意 webapp-build 只做为发布用， 用完还是得删掉，把原来的 webapp 改回来

