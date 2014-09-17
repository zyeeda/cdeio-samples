#扩展后台(文件下载)

本章主要介绍如何实现文件下载功能。

** 以下介绍的方法仅供参考。 **

由于系统中使用的 response 不是 httpServlet 对象，而是 `ringojs/jsgi/response`，故处理下载文件请求的 router 中需要借助 ringojs 的 api。

先确定文件绝对路径，然后调用 `response.static(filepath, content_type)` 加载文件内容，最后将整个 response 在 router 中返回，这样便可以在前台某个位置发起下载文件的请求。

但系统中的请求用的是 ajax，并不会输出文件，而会将文件内容返回在响应中，所以需要借助 iframe 的 src 属性来发送下载文件的请求，达到输出文件的效果。

** 注: 关于 `ringojs` 的用法请参照官方网站 http://ringojs.org/api/master/ **

###1. 前台写法示例

利用 jquery 创建一个 iframe 标签对象，指定 src 属性为处理下载文件请求的 router，最后添加到系统 html 的 body 中

```javascript
$ifrm = $('<iframe></iframe>');
$ifrm.css({
    width: '0px',
    height: '0px',
    display: 'none'
});

// iframe 加载完成 1 秒后删除，因 dom 操作有延迟
$ifrm.attr('onload', function(){
    setTimeout(function(){
        $ifrm.remove();
    }, 1000);
});

// 设置 src 属性为处理下载文件请求的 router
$ifrm.attr('src', 'invoke/.../download');

// 将 iframe 添加到 html 的 body 中
$(document.body).append($ifrm);
```

###2. router 写法示例

```javascript
var response   = require('ringo/jsgi/response');
var {join}     = require('cdeio/util/paths');

var String     = java.lang.String;

router.get('/download/', function(request){
    var res, filename, folder;

    filename = '测试下载.txt';
    folder = 'D:/test/download';

    res = response.static(join(folder, filename), 'text/plain');

    // 处理文件名乱码问题
    filename = new String(new String(filename).bytes, 'ISO8859-1');

    // 按指定文件名输出文件
    res.headers['Content-Disposition'] = 'attachment;filename=' + filename;

    return res;
};
```

上述代码实现了按原文件名下载 `D:/test/download/测试下载.txt` 文件的过程。`join` 为系统提供的工具方法，根据系统所在的不同 os 环境将参数接拼成一个文件路径，并自动处理各参数前台多余或缺少的文件分隔符。

** 注: 各文件类型对应的 content_type 请参照 http://baike.baidu.com/view/1547292.htm?fr=aladdin **
