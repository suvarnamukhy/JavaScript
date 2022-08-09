class bike{
    setName(name){
        this.name=name;

    }
startEngine(){
    console.log('engine started for ' +this.name);

}
stopEngine(){
    console.log('engine stopped for ' +this.name);
}
}

class Rx100 extends bike {

    topSpeed(speed){
        console.log('Top Speed for ' +this.name+ ' is ' +speed);
    }
    }


let myBike = new Rx100();
myBike.setName('Rx100');
myBike.startEngine();
myBike.stopEngine();
myBike.topSpeed(150);






