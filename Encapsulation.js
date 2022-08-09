class Employees{
    setEmployeeDetails(Name,Age,id){
        this.Name=Name;
        this.Age=Age;
        this.id=id;

    }
    getEmpName(){
        return this.Name;
    
    }
    getEmpAge(){
        return this.Age;

    }
    getEmpID(){
         return this.id;
    }

}
let emp1=new Employees();
emp1.setEmployeeDetails('john',42,111);

console.log(emp1.getEmpName()); 
console.log(emp1.getEmpID());
console.log(emp1.getEmpAge());

console.log(emp1.getEmpName() , emp1.getEmpID() , emp1.getEmpAge());

