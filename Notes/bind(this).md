#### 如果想在BB的方法里面，访问到init的this.test，需要：
- init 需要被执行
- xxxFunction.bind(this) 是指把xxxFunction这个函数绑定到this指向的作用域上。
```js
var testOBJ={
    init:function(){
        var initOBJ = 'init_OBJ' 
        this.test='test'
    },
    AA:function () {
        console.log(initOBJ) //undefined
        //var声明的本身就是一个局部变量，只能在init函数中使用，即便做了绑定依然无法访问
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
