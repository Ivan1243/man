class Thing {
    constructor (name, type, color){
        this.name = name;
        this.type = type;
        this.color = color;
    }
    info () {
        console.log(" Это " + this.name + " он " + this.type + " имеет " + this.color + " цвет");
    }
}
var t = new Thing("мяч", "футбольный", "чёрный и белый");
t.info();



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
        console.log(" У него " + this.things.length + " вещи: "   )
        for (var i = 0; i < this.things.length; i++) { 
            console.log(this.things[i]) }
    }
//    SortedArray () {}
    
    addThing(t) {
        this.things.push(t);
    }
}
var cm = new Classmate('Jack', 13, true, [new Thing('мяч', 'футбольный', 'белый'), new Thing('компьютер', 'техника', 'чёрный')])
cm.info();
cm.addThing(new Thing['мяч', 'баскетбольный', 'коричневый']);



class Class {
    constructor(name, cmname, lateness) {
        this.name = name;
        this.cmname = cmname;
        this.lateness = lateness;
    }
    
    info() {
        if (this.lateness) {
            console.log(' Опоздал/а ');
        }
        else {
            console.log(' Не опоздал/а ');
    }
          console.log(" В классе " + this.cmname.length + " человек: "   )
        for (var i = 0; i < this.cmname.length; i++) { 
            console.log(this.cmname[i]) }
    }
}
var c = new Class('7C', )


