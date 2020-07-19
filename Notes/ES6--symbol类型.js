// symbol 做属性名可以保证对象内部的属性不会被覆盖

// 1. 声明类型
let mySymbol = Symbol('mySymbol');
let getName = Symbol('getName');

// 2 添加symbol属性
let obj ={
  age:'22--常规键名称',
  [mySymbol]:'cindy',
  [getName](){
    return this[mySymbol];
  },
}

// 遍历 symbol属性
console.log(Object.getOwnPropertySymbols(obj)); // 只返回symbol属性的【】
console.log(Reflect.ownKeys(obj));// 返回全部属性的【】

// 查找symbol属性 是否存在，不存在则生成一个；
let s1 = Symbol.for('getName'); 

// 获取symbol属性名
console.log(Symbol.keyFor(s1));

// 获取symbol属性值
console.log(obj[getName]())
