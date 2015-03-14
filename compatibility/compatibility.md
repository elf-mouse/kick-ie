浏览器兼容性（v1.0.0）
======================

- `@author` Elf-mousE <nijun@yiban.cn>

**易班Web产品** 面向现代浏览器开发，对 IE 8/9 等浏览器只提供有限的支持。
Ps：尽量培养中国底层用户去习惯使用现代浏览器！

测试浏览器优先级
----------------
- Windows：**Chrome** > **360** > **IE 8** > **IE 9+** > **搜狗** > QQ > 猎豹 > 2345 > 其他
- OS X：**Safari** > Chrome > 其他
这里主要参考[百度统计](http://tongji.baidu.com/data/browser/)

分级浏览器支持
--------------

- **A 级**：最高支持级别，充分利用 H5 和 CSS3 等技术，提供最优的视觉和交互效果。
- **B 级**：有限支持，基本的样式和正常的交互，不考虑视觉、交互效果。
- **C 级**：核心支持，显示语义化的 HTML 标记渲染的内容，不考虑样式和行为。
- **X 级**：未知、零散的很少使用或已经停止开发的浏览器，可能不支持，也可能支持。

按照国际惯例，对主流浏览器（系统）最近两个稳定版本的全面支持。结合国内实际情况，一些浏览器的支持缩减为最新正式版，IE 则对更老版本做了有限支持。

由于资源有限，无法列出所有的浏览器，**使用 `WebKit` 的浏览器只要不乱修改内核，理论上应该都支持**。

**OS/Browser**        | **Ver** | **Windows** | **iOS(7.1.2+)** | **OS X (10.9+)** | **Android (4.1+)** | **WP(8+)**
:-------------------- | :------ | :---------- | :-------------- | :--------------- | :----------------- | :----------
**Chrome**            | L2      | A           | A               | A                | A                  | N/A
**IE**                | 10+     | A           | N/A             | N/A              | N/A                | A-
					  | 9       | B           | N/A             | N/A              | N/A                | N/A
					  | 8       | C+          | N/A             | N/A              | N/A                | N/A
					  | lte7    | C           | N/A             | N/A              | N/A                | N/A
**Firefox**           | L2      | A           | N/A             | A                | X                  | N/A
**Safari**            | L2      | X           | A               | A                | N/A                | N/A
Opera                 | L1      | X           | N/A             | N/A              | X                  | N/A
UC 浏览器             | L1      | X           | A               | N/A              | A                  | A-
**360浏览器**         | L1-极速 | A-          | X               | N/A              | X                  | N/A
					  | L1-IE8  | C+          | N/A             | N/A              | X                  | N/A
**搜狗浏览器**        | L1-极速 | A-          | N/A             | N/A              | N/A                | N/A
					  | L1-IE8  | C+          | N/A             | N/A              | N/A                | N/A
遨游浏览器            | L1-极速 | A
					  | L1-IE8  | C+
**猎豹浏览器**        | L1-极速 | A-
					  | L1-IE8  | C+
百度浏览器            | L1-极速 | A-
					  | L1-IE8  | C+
**QQ浏览器**          | L1-IE8  | C+
**2345王牌浏览器**    | L1-IE8  | C+
世界之窗浏览器        | L1-IE8  | C+

注释：

- `L` 代表 `last`，`L2` - 最新的两个稳定版本；`L1` - 最新稳定版本。

关于 IE 6/7
-----------

默认不支持（**引导升级** 或 **强制升级**）

关于 双核浏览器
---------------

**推荐使用极速模式** 或 **推荐使用现代浏览器**

关于 其他山寨浏览器
-------------------

**推荐使用现代浏览器** 或 **引导升级原生IE**