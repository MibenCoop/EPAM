function Person(name) {
    this.name = name;
}

Person.prototype.sayHi = function() {
    console.log(`Hi, my name is ${this.name}`);
};

function GreatPerson(name, phrase) {
    Person.call(this, name);
    this.phrase = phrase;
}

GreatPerson.prototype = Object.create( Person.prototype);

GreatPerson.prototype.sayPhrase = function() {
    console.log(this.phrase);
    // console.log('name', this.name);
};

let person = new GreatPerson("Bob", "Hello");
person.sayHi();
person.sayPhrase();
