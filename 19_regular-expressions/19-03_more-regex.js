let str =
  'Apple and banana are fruits. An old cliche says an apple a day keeps the doctor way has been replaced by a banana a day keeps the doctor far far away.';

console.log(str.match(/[Aa]pple/g)); // this square bracket means either A or a

console.log(str.match(/[Aa]pple|[Bb]anana/g));

console.log('------------------------------------------------------------------------------------------------------------------');

str = 'Apple and banana are fruits';

console.log(str.match(/[aA]./g)); // . means any character except new line
console.log(str.match(/[aA][A-Za-z]*/g)); // * means 0 or more times
console.log(str.match(/[aA][A-Za-z]+/g)); // + means 1 or more times
console.log(str.match(/[aA][A-Za-z]?/g)); // ? means 0 or 1 time

console.log('------------------------------------------------------------------------------------------------------------------');

str = 'This regular expression example was made in January 12, 2020.';

console.log(str.match(/\d+/g)); // \d : [0-9]

console.log('------------------------------------------------------------------------------------------------------------------');

str = 'This regular expression example was made in December 6, 2019.';

// \b is word boundry , \w is word characters a-z, A-Z, 0-9, including _ (underscore)

console.log(str.match(/\b\w{4}\b/g)); // [ 'This', 'made', '2019' ]

console.log(str.match(/\b[A-z]{4}\b/g)); // [ 'This', 'made' ]

console.log(str.match(/\b\d{4}\b/g)); // [ '2019' ]

console.log(str.match(/\b\d{1,4}\b/g)); // [ '6', '2019' ]

console.log(str.match(/\b[^A-z\s]+\b/g)); // Negation [ '6', '2019' ]

console.log('------------------------------------------------------------------------------------------------------------------');

str = 'arijitdas_Email-99@hotmail.co.in'; // exact matching

let result = str.match(/^([A-z0-9_-]+)(@)([a-z]+)(\.[a-z]{2,3})(\.[a-z]{2,3})?$/);

console.log(result);
console.log(result.input === result[0]);

console.log('------------------------------------------------------------------------------------------------------------------');
