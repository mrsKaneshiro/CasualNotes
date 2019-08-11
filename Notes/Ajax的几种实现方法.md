# Ajax的几种实现方法

### 1.介绍
Ajax 是实现异步加载页面内容的技术。Ajax 是XMLHttpRequest对象。可以通过原生JS，Jquery，Vue等来实现。本文主要是使用**本地文档**模拟服务器的形式实现Ajax的demo案例。

### 2.属性和方法
以xhr为XMLHttpRequest的实例为例：
- xhr.readState：表示服务器响应阶段，当xhr.readState==4时，可以访问服务器发送回来的数据。
- xhr.onreadystatechange：事件处理函数，服务器对xhr做出处理的时候触发。
- xhr.open(‘请求类型’,’URL’,’是否异步’)：打开AJAX请求；如果是POST类型的请求，要在setRequestHeader方法中添加头部信息，如：  setRequestHeader("Content-Type","application/x-www-form-urlencoded");
- xhr.send(‘需要向服务器发送的数据’)

### 3.POST请求与GET请求的区别 

### 4.原生JS的实现方法
使用原生的JS实现Ajax需要考虑跨浏览器创建xhr的问题。这里创建了一个兼容IE5以前版本的创建xhr的通用方法。
```js
function getHTTPObject() {
            /*
            建立XMLHtttpRequset对象的通用方法
             */
            if(typeof XMLHttpRequest=='undefined'){
                XMLHttpRequest=function(){
                    try{
                        return  new ActiveXObject("Msxml2.XMLHTTP.6.0");
                    }catch (e) {
                    }
                    try {
                        return  new ActiveXObject("Msxml2.XMLHTTP.3.0");
                    }catch (e) {
                    }
                    try {
                        return  new ActiveXObject("Msxml2.XMLHTTP");
                    }catch (e) {
                    }
                    return false;
                }
            }
            return new XMLHttpRequest()
        }
```
- **GET**请求实现的四个步骤：
```js
 function getNewContent() {
            //1. 创建对象
            var request=getHTTPObject();
            if (request){
                //2. 创建open连接
                request.open("GET","ajax.txt",true);
                //4. 状态改变触发的事件
                request.onreadystatechange=function(){
                    //回调函数
                    if(request.readyState==4){
                        //request.setRequestHeader("cindy","Gao")
                        //getAllResponseHeaders：获取包含所有头部信息的长字符串
                        console.log(request.getAllResponseHeaders())
                        alert("状态为4")
                        var p=document.createElement("p");
                        p.innerText=request.responseText;
                        document.getElementById("new").appendChild(p);
                    }
                }
                //3. send发送数据
                request.send(null);
                console.log(request)
            }else{
                console.log("request 没有被创建");
            }
            alert("由于脚本发送请求以后，不会等待相应，会继续执行，所以这句话会在，状态4之前发生。")
        }
```
- **POST**请求实现的五个步骤：
```js
function postNewContent(){
            //step1.创建xhr对象
            var request=getHTTPObject();
            if (request){
               //step2.设置onreadystatechange回调函数
                request.onreadystatechange=function(){
                    //回调函数
                    if(request.readyState==4){
                        //request.setRequestHeader("cindy","Gao")
                        //getAllResponseHeaders：获取包含所有头部信息的长字符串
                        console.log(request.getAllResponseHeaders())
                        alert("状态为4")
                        var p=document.createElement("p");
                        p.innerText=request.responseText;
                        document.getElementById("new").appendChild(p);
                    }
                }
                //step3.打开连接
                request.open("POST","ajax.txt",true);
                //step4.如果是表单，设置头部信息 post只能以表单的形式发送？ 但是手动添加的请求不是表单
                request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                //step5.发送数据
                request.send(null);
                console.log(request)
            }else{
                console.log("request 没有被创建");
            }
        }
```

### 5.Jquery实现
未完待续

### 6.Vue实现
VUE实现Ajax可以通过vue-resource实现。
* 引入方式：
```js
<script src = 'https://cdn.jsdelivr.net/npm/vue-resource@1.5.1 '></script>
```
* 语法格式：
```js// 基于全局Vue对象使用http
Vue.http.get('/someUrl', [options]).then(successCallback, errorCallback);
Vue.http.post('/someUrl', [body], [options]).then(successCallback, errorCallback);

// 在一个Vue实例内使用$http
this.$http.get('/someUrl', [options]).then(successCallback, errorCallback);
this.$http.post('/someUrl', [body], [options]).then(successCallback, errorCallback);
```
* 实现案例：
```js
getInfo(){
     this.$http.get('dataBase').then(function (result) {
        console.log(result)
    }).catch(function(reason) {
        console.log('catch:请求失败', reason);
    })

}
postInfo(){
    this.$http.post('dataBase',{},{emulateHTTP:true}).then(result=>{
        console.log(result.body)
    }).catch(function(reason) {
        console.log('catch:请求失败', reason);
    })
}
jsonpInfo(){
    //JsonP请求可以解决前后端端口不一致的问题，推荐使用
    this.$http.jsonp('dataBase',{emulateHTTP:true}).then(result=>{
        console.log(result)
    },function (error) {
        console.log('失败')
        console.log(error);
    })
}
```

### 7.参考文档
* [v-resource api官方解释](https://github.com/pagekit/vue-resource)
* [v-resource 中文使用参考](https://www.cnblogs.com/keepfool/p/5657065.html)
* [GET请求与POST请求的区别]()
