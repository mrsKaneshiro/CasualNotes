content-type 发送信息至服务器时的内容编码类型, 常用的值主要包含以下几个

1. application/x-www-form-urlencoded 
```
post请求默认的处理方式，会将参数转化成键值对的形式，如ID="1"&name="alex"  
get请求也会以上述形式编码；
psot展示形式：formData
get展示形式：Query String Parameters
```

2. application/json 
```
不论是post还是get 必须将参数转换成json格式传递；
优点：可以传递复杂的数据结构
psot展示形式：Request Payload
```

3. multipart/form-data 
```
参数体使用---分割
```
