兼容性解决方案（v1.0.0）
========================

- `@author` Elf-mousE <nijun@yiban.cn>

IE 8/9
------

- IE 8/9 不支持 `transition`，看不到任何动画效果；
- IE 9 对 ES5 支持相对较好，IE 8 则不然；

功能 | IE 8 | IE 9
---- | ---- | ----
`border-radius` | NO | YES
`box-shadow` | NO | YES
`transform` | NO | YES（-ms 前缀）
`Flex Box` | NO
`transition` | NO
`placeholder` | NO

IE 8
----

	﻿<!--[if (gte IE 9)|!(IE)]><!-->
	<script src="js/jquery/2.x.x/jquery.js"></script>
	<!--<![endif]-->

	<!--[if lt IE 9]>
	<script src="js/jquery/1.x.x/jquery.js"></script>
	<script src="js/polyfill/html5shiv.js"></script>
	<script src="js/polyfill/respond.js"></script>
	<script src="js/polyfill/rem.js"></script>
	<![endif]-->

HTML5 新元素
------------

- [HTML5 Shiv](https://github.com/aFarkas/html5shiv)

Media Query
-----------

- [Respond.js](https://github.com/scottjehl/Respond)

rem
---

- [REM unit polyfill](https://github.com/chuckcarpenter/REM-unit-polyfill)

`box-sizing`
------------

> IE 8使用 min/max-width/height 时，将忽略 `box-sizing: border-box;`

伪元素
------

IE 8 只支持 CSS 2.1 规范中的单冒号语法（`:before`/`:after`），不支持 CSS3 的双冒号语法(`::before`/`::after`)。

字体图标
--------

参见 Bootstrap 中的 [issue 及里面提供的解决方法](https://github.com/twbs/bootstrap/issues/13863)。

经过 XP 环境下 IE 8 的实际测试，个人建议还是尽量使用向下兼容的写法：

    <i class="iconfont">Unicode 或 HTML实体字符</i>
