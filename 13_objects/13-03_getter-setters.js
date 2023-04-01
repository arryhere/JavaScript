/*
• JavaScript Accessors (Getters and Setters)
• ECMAScript 5 (ES5 2009) introduced Getter and Setters
• Getters and setters allow you to define Object Accessors (Computed Properties)
• function can be used in place of getter and setter, but latter is called as a property not as a function
*/

const person = {
  firstname: 'Arijit',
  lastname: 'Das',
  language: 'English',
  gender: '',
  get getLanguage() {
    return person.language.toUpperCase();
  },
  set setGender(gen) {
    this.gender = gen.toUpperCase();
  },
};

console.log(person);
console.log(person.getLanguage);
person.setGender = 'male';

console.log(person);

console.log('----------------------------------------------------------------------------------------------------------------------------');

const me = {
  firstname: 'user',
  lastname: 'user',
  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  },
  set fullname(name) {
    const n = name.split(' ');
    if (!(n.length > 2 || n.length <= 0)) {
      this.firstname = n[0];
      this.lastname = n[1];
    } else {
      this.firstname = 'user';
      this.lastname = 'user';
    }
  },
};

console.log(me);

me.fullname = 'Arijit Das';

console.log(me);

console.log('----------------------------------------------------------------------------------------------------------------------------');

/*
• Why Using Getters and Setters?
• It gives simpler syntax
• It allows equal syntax for properties and methods
• It can secure better data quality
• It is useful for doing things behind-the-scenes
*/
