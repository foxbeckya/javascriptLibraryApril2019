class User {
    constructor(first, last, e){
        this.f=first;
        this.l=last;
        this.email=e;
    }
}

var userOne = new User("Paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(userOne.first);
console.log(userOne.f);
console.log(userOne.l);
console.log(userOne);

class Player{
    constructor (name, number, points){
        this.id=name;
        this.code=number;
        this.score=points;
    }
}

var Wendy = new Player("Wendy", "22", "568");
console.log(Wendy.id);
console.log(Wendy.code);
console.log(Wendy.score);