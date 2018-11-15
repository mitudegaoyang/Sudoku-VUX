# 数独游戏

> 一个基于VUX的项目

## 构建步骤

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 设计目标

假设目标终端是智能手机

> 适配iphone6及更大尺寸(分辨率为375x667||720x1280)

纯鼠标(触摸)操作

> 鼠标点击或碰触事件

兼顾PC浏览器

> 可使用开发者工具-移动设备模式

## 界面及操作

### 九宫格

### 弹出数字面板

* 点击数字直接选用该数字填写当前格
* 点击底部中央空白:清除当期格的数字
* 点击底部左右色块:标记当前格具有特殊意义

## 功能按钮

* 检查：检查是否成功完成本局游戏，标记出错的小格
* 重置：重置到本局起始状态
* 清理：清除错误标记
* 重建：放弃当前局，新开一局

## 设计图

![](./src/assets/sudoku.png)

## 数据结构

### 数据结构 - 数组

第1维，行，9个数组组成，每行是第二层数组

第2维，格，9个数组组成

![](./src/assets/structure.png)

```vue
aRow = matrix[i]
aCell = aRow[j]

<!--1-9，0-空白-->
<!--0,"",null,undefined-->
```

## 游戏算法

### 生成算法

不可避免的会用到递归

采用一个简单的算法，从数字1开始

失败重算

随机位置，采用Fisher-Yates洗牌算法

![](./src/assets/Fisher-Yates.png)

## 参考资料

* [从JS到TS开发数独游戏(JS版)](https://www.imooc.com/learn/899)
* [vue-cli文档](http://vuejs-templates.github.io/webpack/)
* [vue-loader文档](http://vuejs.github.io/vue-loader)
