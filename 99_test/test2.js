let regex = /^([\w]+-[\w]+)(@)([a-z]+)(\.)([a-z]{2,3})$/;

let str = 'sam-p-leEmail@google.com';

console.log(regex.test(str));