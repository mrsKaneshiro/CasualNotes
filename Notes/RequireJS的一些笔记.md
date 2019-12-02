
引入requireJS，异步加载依赖文件。
data-main属性配置的文件是当require.js会在加载完，通过回调方法去加载这data-main里面的js文件。
所以main.js是依赖加载完成以后，第一个执行的JS文件。

**index.html 中配置**
```html
<body style="display:none;">
    <div></div>
	<script data-main="js/main.js" src="libs/require.js"></script>
</body>
```

**main.js 中配置**
