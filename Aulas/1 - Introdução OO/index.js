
// exemplo: estruturar a driven
// Driven
// Instrutores: didi, let, pink
// Coordenadores: mafe
// Papeis:
// person -> introducion()
// teacher -> teach()
// manager -> meeting()

// dentro de uma classe você define os comportamentos e as propriedades dela:

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        console.log(`My name is ${this.name} and I am ${this.age} years old`);
    }
    //podemos então apagar essa função das classes filhas
}

class Teacher extends Person{  //essa classe também é uma pessoa
    constructor(name, age, specialization){
        super(name,age); //chama o constructor da classe mãe Person
        this.specialization = specialization;
    }
    teach(){
        console.log(`I am teaching ${this.specialization}`);
    }
}

class Manager extends Person{  
    constructor(name,age){
        super(name,age); //chama o constructor da classe mãe Person
    }
    meeting(){
        console.log(`I am in a meeting`);
    }
}

//como exitem informações que se repetem, podemos criar uma classe mãe chamada person
//e fazer com que as outras classes herdem dela


//didi é um novo objeto da classe person com nome diego e idade 31
const didi = new Teacher("diego", 31, "OO"); 
//cria um objeto no formato Teacher{name: "diego", age: 31}
//new sempre gera um objeto novo. É como chamar Teacher.constructor("diego", 31)
const leti = new Teacher ("let", 28, "UX");
const pink = new Teacher ("pink", 32, "UI");
const mafe = new Manager ("mafe", 29);

didi.introduce(); //didi se apresenta
didi.teach(); //didi ensina
leti.introduce(); //leti se apresenta
leti.teach(); //leti ensina
pink.introduce(); //pink se apresenta
pink.teach(); //pink ensina
mafe.introduce(); //mafe se apresenta
mafe.meeting(); //mafe ensina


// Exemplo do Didi sem OO:
// const didi = {
// 	name: diego,
// 	age: 666,
// 	title: instructor,
// 	specialization: OO
// 	introduce(){
// 		console.log("My name is ${this.name}");
// 	}
// 	teach(){
// 		console.log("Im teaching ${this.specialization}")	
// 	}
// }