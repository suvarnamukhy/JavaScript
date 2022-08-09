class Employee{
    constructor(name,id,age){
        this.name=name;
        this.id=id;
        this.age=age

    }
}
let emp1=new Employee('John',1,28);
let emp2=new Employee('keyley',2,30);


console.log('Name is '  +emp1.name);
console.log('Id is ' +emp1.id);
console.log('age is ' +emp1.age);


console.log(emp2.name);
console.log(emp2.id, emp2.age);
