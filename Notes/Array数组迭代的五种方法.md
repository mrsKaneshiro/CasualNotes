## 数组迭代的五种方法
ES5为数组定义了5种迭代的方法，五种方法都接受两个参数： 要在每一项上运行的函数，运行该函数的作用域——影响this的值。
每个function可接受三个参数，分别是变量数组的项目item，项目索引i，数组对象本身array。

**这五种方法分别是：** 
1. every() : 查询全包含，返回Boolean类型值，对数组中的每一项运行给定的函数，如果函数的**每一项**都返回true,则返回true 
2. some() : 查询半包含，返回Boolean类型值，对数组中的每一项运行给定的函数，如果函数的**有一项**都返回true,则返回true 
3. filter() : 过滤，返回Array类型值，返回筛选后为true项组成的数组
4. map()：对数组的数据进行操作，返回Array类型值， 返回每一项操作结果的组成值
5. forEach()：没有返回值，和for循环遍历没有什么区别，用于执行某些迭代的操作。

**具体使用如下所示：** 
- every()
```JS
var arr=[1,2,3,4,5,6,7]

var everyBackValue=arr.every(item=>{
    return (item>2)
})

console.log(everyBackValue)  
```
输出：false
原因：不是全部的项目都大于2

- some() 
```JS
var arr=[1,2,3,4,5,6,7]

var someBackValue=arr.some(item=>{
    return (item>2)
})

console.log(someBackValue)  
```
输出：true
原因：有一个item>2 则返回为true

- filter() 
```JS
var arr=[1,2,3,4,5,6,7]
var filterBackValue=arr.filter(item=>{
    return (item>2)
})

console.log(filterBackValue) 
```
输出：[3,4,5,6,7]
原因：过滤掉了小于2的值组成的数组

- map() 
```JS
var arr=[1,2,3,4,5,6,7]

var mapBackValue=arr.map(item=>{
    return (item*2)
})

console.log(mapBackValue)
```
输出：[2,4,6,8,10,12,14]
原因：返回结果组成的数组

- forEach() 
```JS
var arr=[1,2,3,4,5,6,7]

arr.forEach((item,i)=>{
    if(item==3){
        console.log(i);  //>>对数组进行操作，没有返回值
    }
})
```
输出：2
原因：对数组进行操作，没有返回值

如果想将i获取，可以通过外部定义全局变量的形式
```JS
var arr=[1,2,3,4,5,6,7]
var j

arr.forEach((item,i)=>{
    if(item==3){
        j=i;
    }
})

console.log(j)
```
