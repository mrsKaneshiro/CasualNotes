// promise 对象 ---基础使用；
let p = new Promise((resolve,reject) => {
    if ('没有错误') {
        resolve('success');
    } else {
        reject('erroe');
    }
});

p.then( result =>{
    // resolve
    console.log(result);
}).catch( error =>{
    // reject
    console.log(error);
}).finally( ()=>{
    console.log('finally');
})

// 结合async + await
/***
 * await 必须在 async 的体内使用；
 * await 后面是一个promise对象 本身即可拦截到 resolve 因此不必再写then；
 * async 返回一个promise对象
 */

var data = 'null';
function define_promise() {
    return new Promise((resolve)=> {
        setTimeout(()=>{
            data = 'data';
            resolve(data);
        },2000);
    })
}
async function test () {
    data = await define_promise();
    console.log(data);
    return 'cynthia 返回给test()对象的'
}

test().then( result => {
    console.log('test', result);
})

console.log('data', data); 
console.log('=======结束标志=======');
