
运行 zyeeda-coala-examples
-----------------------

  *  配置 mysql
      默认的数据库是mysql的coala-examples库, 用户名密码都是root
      可以在`src/main/webapp/WEB-INF/jetty-env.xml`文件中修数据库设置
  *  运行 coala-examples
      将coala-ui的coala文件夹链接到scripts目录下
      `mvn jetty:run`
  *  访问
  	  https://localhost:7000/coala-examples
