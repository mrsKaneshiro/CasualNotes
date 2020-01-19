#### 如果想在BB的方法里面，访问到init的this.test，需要：
- init 需要被执行
- xxxFunction.bind(this) 是指把xxxFunction这个函数绑定到this指向的作用域上。
```js
var testOBJ={
    init:function(){
        this.test='test'
    },
    AA:function () {
        this.BB()
    },
    BB:function () {
        var cc=function (){
            this.test='cc'
        }.bind(this); //闭包的执行域为全局，bind(this)把作用域绑定在了BB的执行域中，即testOBJ
        cc()
        console.log(this.test)
    },
}
testOBJ.init()
testOBJ.AA()
```
