// 00-remove-duplicate-elements-from-string

const str = "aabbccdefggaabb";

let a = Array.from(str);

let set = new Set(a);

a = Array.from(set);

let str2 = a.toString().replace(/,/g, '');

console.log(str2);