Kick IE
=======

`@author:` [**Elf-mousE**](http://elf-mouse.me/)

- 根据国际惯例的浏览器标准并结合**东国特色**，针对万恶的`IE`浏览器做相对抵制。
- 希望最终能达成提升囧国全名上网基本素质？并且能享受到最佳的上网体验效果！

功能特点
--------

- IE9 友情提醒升级
- IE8 强烈推荐升级
- IE6-7 强制升级（业务界面不可见）
- 检测主牛双(shan)核(zhai)浏览器
- 支持CMD

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

KickIE参数 | 说明
---------- | ----
`killIE` | 抵制IE的最大版本，范围：8-9（默认：9）
`url` | 推荐的浏览器地址（默认：谷歌浏览器官网）
`label` | 标题党
`up[7-9]` | 自定义IE7-9的升级提示

KickIE接口 | 类型
---------- | ----
`KickIE` | function
`isIE` | boolean
`isDualCore` | boolean
`IE.ver` | int
`IE.lte9` | boolean
`IE.lte8` | boolean
`IE.lte7` | boolean

版本说明
--------

> 2015.03.27

- 优化export
- 新增 `isDualCore` 双(shan)核(zhai)浏览器的判断
- 更新支持CMD
- 更新加载时自动运行 `KickIE`
- 修复IE8下自定义扩展

> 2015.03.18

- 更新export

> 2015.03.14

- beta版
