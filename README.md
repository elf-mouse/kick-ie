Kick IE
=======

`@author:` [**Elf-mousE**](http://elf-mouse.me/)

- 根据国际惯例的浏览器标准并结合**东国特色**，针对万恶的`IE`浏览器做相对抵制。
- 希望最终能达成提升囧国全名上网基本素质？并且能享受到最佳的上网体验效果！

功能特点
--------

- IE9 友情提醒升级
- IE8 强烈推荐升级
- IE6-7 强制升级
- 支持[Sea.js](http://seajs.org/)

使用方法
--------

    <script src="js/kick-ie.min.js"></script>
    <script>
    // init for custom
    /*KickIE({
    killIE: 8,
    url: '#可用的谷歌浏览器下载地址',
    label: 'XXX砖家提醒',
    up8: function() {
      // your code
      console.log(8);
    },
    up7: function() {
      // your code
      console.log(7);
    }
    });*/
    </script>

KickIE方法参数说明
------------------

- `killIE` 抵制IE的最大版本，范围：8-9（默认：9）
- `url` 推荐的浏览器地址（默认：谷歌浏览器官网）
- `label` 标题党
- `up[7-9]` 自定义IE7-9的升级提示

接口说明
--------

- `KickIE`            // function
- `KickIE.isIE`       // boolean
- `KickIE.isDualCore` // boolean
- `KickIE.IE.ver`     // int
- `KickIE.IE.lte9`    // boolean
- `KickIE.IE.lte8`    // boolean
- `KickIE.IE.lte7`    // boolean

版本说明
--------

- 2015.03.27

> 优化export
> 新增双(shan)核(zhai)浏览器的判断
> 更新支持Sea.js
> 更新自动运行程序
> 修复自定义扩展

- 2015.03.18

> 更新export

- 2015.03.14

> beta版
