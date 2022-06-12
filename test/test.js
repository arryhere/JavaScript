let obj = {};

obj.a = 1;
obj.b = 1;
obj["c"] = 1

let k1 = Symbol();
obj[k1] = 33

console.log(obj);