let arr = Array.from(document.links);


let href = arr.map((e,i,arr) => {
    return e.href
})

console.log(href);

href = href.filter((e,i,arr) => {
    return e.match(/google/gi)
})

console.log(href);