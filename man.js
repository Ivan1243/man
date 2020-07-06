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
        console.log(" У него есть " + this.things);
   }
}
var cm = new Classmate('Jack', 13, true, ['ball', 'computer'])
cm.info();
cm.AllThings();


class Things {
    constructor (name, type, color){
        this.name = name;
        this.type = type;
        this.color = color;
    }
    things () {
        console.log(" У него есть " + t.name + " он " + t.type + ", " + t.color);
        console.log(" Также у него есть " + h.name + " это " + h.type " имеет " + h.color + " цвет " );
    }
}
var t = new Things("мяч", "футбольный", "чёрный и белый");
var h = new Things("яблоко", "еда", "зелёный");
h.things()
