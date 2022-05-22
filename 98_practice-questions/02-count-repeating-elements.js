// 02-count-repeating-elements

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French'
]

const lang = new Set(languages);            // Set(4) { 'English', 'Finnish', 'French', 'Spanish' }

const result = [];

for (const x of lang) {
    const filteredLang = languages.filter((e) => {return e === x});
    const countLang = filteredLang.length;
    result.push({language : x , count : countLang});
}

console.log(result);