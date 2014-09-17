##报表

为了满足业务系统实现多种样式的报表展示需求，引入了 `birt` 报表工具，系统中如需要使用报表时使用 birt 报表工具设计即可。由于 birt 报表部署需要单独的容器，而我们也需要将报表的内容像普通菜单那样展示列表工具栏等需求，我们引入了另一个经过封装的报表容器项目，名为 zyeeda-cdeio-report-1(以下简称 cdeio-report)，项目可以从以下地址获得 https://bitbucket.org/zyeeda/zyeeda-cdeio-report-1  然后经过对两个项目的配置部署，达到将报表内容按照与系统风格一致的界面显示在菜单内部的效果，并且提供`参数设置`、`导出数据`、`导出报表`、`打印报表` 这些 birt 容器原生支持的功能。

**注：关于 birt 报表工具的使用方法请参照官网：http://www.eclipse.org/birt **

###1. 创建报表菜单

报表菜单访问前缀为 report，例如某菜单的访问路径为 #report/birt-examples/basic

###2. 在指定放置报表文件

设计好报表文件后按照要访问的菜单路径放置在打包后的 cdeio-report 项目的 designs 目录下，例如菜单 #report/birt-examples/basic 的报表文件路径就应该为 `designs/birt-examples/basic.rptdesign`。

###3. 修改配置

####3.1 业务系统配置

在业务系统的 `WEB-INF/classes/settings/birt.properties` 文件中的 `cdeio.birt.proxy.url` 配置项中配置 cdeio-report 项目的访问路径。
例如 `http://127.0.0.1:8181/cdeio-examples`，由于 cdeio-report 项目并无其它应用名称，除了地址与端口之外，最后的 `cdeio-examples` 应该修改为业务系统部署在服务器的应用程序名称。

####3.2 cdeio-report 项目配置

在业务系统中配置了报表项目的访问路径之后，需要在报表项目中 `WEB-INF/viewer.properties` 文件的 `base_url` 配置中配置业务系统去除应用程序的访问路径，例如 `http://127.0.0.1:8000`。

除了要配置与业务系统对应的访问地址之外，还要在报表项目中配置项目部署在服务器的应用程序名称，这个配置在项目根目录的 `pom.xml` 中

```xml
...
<webApp>
    <contextPath>/cdeio-examples</contextPath>
</webApp>
...
```

将以上配置中的 `cdeio-examples` 修改为业务系统部署在服务器的应用程序名称即可。
