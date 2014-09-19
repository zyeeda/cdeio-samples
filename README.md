
运行 zyeeda-cdeio-samples
-----------------------

  *  配置 mysql
      默认的数据库是mysql的cdeio-examples库, 用户名密码都是root
      可以在`src/main/webapp/WEB-INF/jetty-env.xml`文件中修数据库设置
  *  运行 cdeio-samples
      将 colorvest 的 cdeio 文件夹链接到 scripts 目录下
      将 cdeio-samples\src\main\java 文件夹链接到 cdeio-samples\src\main\webapp\WEB-INF\classes 目录下
      将 cdeio-samples\src\main\resources\bpmn 文件夹链接到 cdeio-samples\src\main\webapp\WEB-INF\classes 目录下
      `mvn jetty:run`
  *  访问
  	  https://localhost:7000/cdeio-samples

