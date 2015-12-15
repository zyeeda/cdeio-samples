# 部署 cdeio-samples

## 配置数据库

系统默认使用 MySQL 服务器，并且数据库名称为 `cdeio-samples`，用户名为 `root`，密码为 `mysecretpassword`

## 运行

* 将编译后的 colorvest 项目下的 `cdeio` 文件夹链接到 `src/main/webapp/scripts` 目录下，名字也叫做 `cdeio`；
* 将 `cdeio-samples\src\main\java` 文件夹链接到 `cdeio-samples\src\main\webapp\WEB-INF\classes` 目录下；
* 将 `cdeio-samples\src\main\resources\bpmn` 文件夹链接到 `cdeio-samples\src\main\webapp\WEB-INF\classes` 目录下；
* 运行 `mvn jetty:run`
* 访问 https://localhost:8443/cdeio-samples

## r.js 压缩

运行 `npm install -g requirejs` 命令安装 RequireJS，然后切换到项目目录下执行 `r.js -o src/main/webapp/webapp-built.js` 就会生成 `webapp-build` 目录。把原来的 `webapp` 目录备份，将新生成的 `webapp-build` 改名为 `webapp`，重新启动系统即可。

**注意：`webapp-build` 只用来发布，不用把它提交到工作区。**

