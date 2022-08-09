let studentDetails= function(name,id,course){
this.name=name;
this.id=id;
this.course=course;
}

studentDetails.prototype.getName= function(){
    return this.name;

};
studentDetails.prototype.getId= function(){
    return this.id;

};
studentDetails.prototype.getCourse= function(){
    return this.course;
};

let student1= new studentDetails('suvarna' , 1 , 'EEE' );
let student2= new studentDetails('AARAV' , 1 , 'ECE' );

console.log(student1.getName());
console.log(student2.getCourse());

