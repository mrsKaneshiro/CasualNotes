// Map用于存储任何结构的键值对; 生成一个迭代器；
let map = new Map();

// 属性 set get size delete has
map.set('line','北京路').set('station','西直门');
console.log(map.has('line'));
console.log(map.delete('station'));
console.log(map.get('line'))
map.set('line','北京路2')
console.log(map.size);

// 取出所有的key 返回数组
let keys = [...map.keys()];
console.log(keys)

// 取出所有的val 返回数组
let values = [...map.values()]
console.log(values);

// 取出所有的键值对 返回数组 或者 let ent = [...map.entries()]
let entries = [...map]
console.log(entries);


// map 对象转换为 普通对象
let obj = {};
for (let [key,val] of map) {
    obj[key]=val;
}
console.log('obj', obj)

// map 对象转为 数组---1
let arr = []
for (let item of map){
    arr.push(item)
}
console.log('arr',arr)

// map 对象转为 数组---2
console.log([...map]);

// 判断当前对象是不是可迭代的对象 
console.log(typeof map[Symbol.iterator]);//返回function
