class Animal{
       constructor(name){
        this.name=name;

       }
       eats(){
        console.log(this.name+ ' eats food');

       }
}
 class dog extends Animal{

    eats(){
        console.log(this.name+  ' eats fishes');

    }
 }
 let cat=new Animal('cat');
 cat.eats();

 let cat2= new dog('cat2');
 cat2.eats();


 



  

// let duck = new dog('duck');
 //duck.eats(); 