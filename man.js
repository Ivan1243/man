class Man {
    constructor (name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    info () {
        if (this.gender) {
            console.log(' Это мужчина  ' + 'ему ' + this.age +  ' лет ' + 'его зовут ' + this.name );
        }
        else {
            console.log(' Это женщина  ' + 'ей ' + this.age +  ' лет ' + 'её зовут ' + this.name );
    }
}
}
var man = new Man('Alex', 14, true);
var woman = new Man('Mary', 15, false);
man.info();
woman.info();

class Classmate extends Man {
    constructor (name, age, gender, things) {
        super(name, age, gender);
        this.things = things;
    }
    info () {
        super.info()
    }
   AllThings () {
        console.log(this.things);
   }
}
var cm = new Classmate('Jack', 15, true, ['ball', 'computer'])
cm.info();
cm.AllThings();


class Things {
    constructor (name, type, color){
        this.name = name;
        this.type = type;
        this.things = things;
    }
    things () {
        this.things = ['мяч', 'зубная щётка', 'яблоко'];
        console.log(this.things.length);
    }
}
var t = new Things();
t.things()