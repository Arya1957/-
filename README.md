# search-box
仿百度搜索框


## 待改进的： 
###### 搜索框
- 在搜索框输入内容的时候，建议列表的部分字体会加粗 （用JS做）

###### 关于 svg的使用
- 记得在svg里加上 ： aria-hidden="true"， 残障人士如失明的人使用识读设备（自动读取内容并自动播放出来），播放到带此属性的内容时会自动跳过，以免残障人士混淆！

######  “百度一下” 这个按钮
- 可以尝试做成涟漪效果 （可以用transform: scale(10)来放大，transition来实现渐变）
- 用JS获取鼠标点击的位置，让涟漪从点击的地方开始

###### 搜索框自适应


## 一些tips
###### 关于 `<button>`
- `<button>` 有默认的border
- `<button>` 默认会让字居中
- 点击`<button>` 时，会有默认的outline，记得去掉
- outline 不占据空间

###### 关于搜索框

- 自动补全功能根据自己的需求决定要不要关掉，如果要关掉的话，在`<input>`里加上 autocomplete = "off" 就可以了

###### 关于按钮的涟漪
- 如果先将元素 display: none, 然后事件触发时再 display 是无法做成动画效果的 ，可以用 visibility:hidden 。但是要注意:
  visibility:hidden 只是看不见， 但是实际依旧存在，利于SEO优化，但依旧会影响布局。如果父元素应用了 visibility: hidden ，则它的所有子元素也都会不可见，但是可以通过给子元素设置 visibility:visible 来让子元素可见。
  
## 结语

小白一只，多多指教 ！
