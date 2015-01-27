本例主要介绍grid-picker。

 Cdeio的使用过程中，若实体出现了多对一关联，我们就可以使用grid-picker组件。例如：task实体关联了user实体，是多对一关联，那么在task表单界面，user字段会呈现出picker组件，默认是grid-picker，而以下配置是定义在user的scaffold.js中的：

 ```
 // user.feature/scaffold.js
 exports.picker = {
    grid: {
        columns: [
            {name: 'name', header: '名字'},
            {name: 'code', header: '编号'},
            {name: 'birthday', header: '生日'},
            {name: 'email', header: '邮箱'}
        ]
    }
 };
 ```

 注：本例的user.feature因在功能上较简单，无过多的描述，所以没有暴露出来。若用户想体验grid-picker，可直接由地址http://localhost:8000/cdeio-samples/#feature/scaffold/field/scaffold:user 到user界面，添加完user信息后，再进到GridPicker查看task表单中user字段。