function add(a,b){
    console.log(a+b);
        
}
add(1,4);

function sub(a,b){
    console.log(a-b);
}

sub(4,2);


function func1(){
    setTimeout(()=>{
    console.log(x);
    console.log(y);
    },3000);
    var x = 2;
    let y = 12;
    }
    func1();


    function func2(){
        for(var i = 0; i < 3; i++){
        setTimeout(()=> console.log(i),2000);
        }
        }
        func2();