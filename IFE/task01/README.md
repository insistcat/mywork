#three-column-layout 
1.float   
2.position   
3.负margin   
4.flexbox
***  
###float和position  
**** 遇到的问题： ****   
1.float和inline-block都能使p标签浮上去，但是inline-block的p标签和父级的包裹层有错位，暂时不知道怎么解决？  
 
2.clearfix的原理是用伪类在后面插入一个div，使用clear，需要注意的是clearfix使用的位置是该元素的父级。如果是自身加clearfix，那么高度是固定的，因为父级高度是根据最高的元素可以得出。

3.中间块内容溢出时，在自身添加minwidth没有效果，只能在整个包含区添加，用overflow：scroll看起来很不合理，搜易pass

*************
position和float的异同？ 
  
position可以精确的定在某个位置   
relative：相对自身的初始定位的偏移，空间不释放   
absolute：相对父级的元素的偏移，空间释放   
fix：相对于浏览器的，空间释放

float：必须要清除浮动来能不影响后面元素的布局   
清除的位置要确定并理解   

*************
负的margin方法

**************************
flexbox方法

