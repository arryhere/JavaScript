let obj1 = {
    name: 'arijit',
    age: 22,
    gender: 'male'
}
let obj2 = {
    name: 'aerijit',
    age: 222,
    gender: 'maeele'
}

let arr = [];

if (arr.length !== 0) {
    for (const x of arr) {
        if (x.name !== obj1.name && x.age !== obj1.age && x.gender !== obj1.gender) {
            console.log('rewewwew');
            arr.push(obj1)
        }
    }
}
else{
    arr.push(obj1)
}
for (const x of arr) {
    if(x.name !== obj2.name && x.age !== obj2.age && x.gender !== obj2.gender) {
        arr.push(obj2)
    }
}
console.log(arr);


