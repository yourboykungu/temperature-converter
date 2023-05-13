//window.alert('it works');

/*let firstname= "mark";
let age= 20;
let student= true;

console.log("my name is ", firstname);
console.log("i am ", age, " years old.");
console.log("student: ",student);

document.getElementById("p1").innerHTML= "my name is " + firstname;
document.getElementById("p2").innerHTML= "i am " + age + " years old";
*/

//1)get user input
//let username= window.prompt("name");
//console.log(username);
//2)get user input
/*let username; 
document.getElementById("submit").onclick = function(){
    username= document.getElementById("name").value;
    console.log(username);
};
*/

// changing data types
/*
let x,y,z;
x= 21;
y= "3.14";
console.log(typeof x,typeof y);
z= x;
x= String(y);
y= Number(z);
console.log(typeof x,typeof y);
console.log(x,y);
*/
//find hypotenuse
/*let height,width,hypotenuse;
document.getElementById("button").onclick = function(){
   height= Number(document.getElementById("height").value) ;
   width= Number(document.getElementById("width").value);
   hypotenuse= Number(Math.sqrt(Math.pow(width,2) + Math.pow(height,2)));
   console.log(hypotenuse);
   
} ;
*/

//counter program

/* //only use the "onclick" property once or it will overwrite the previous instructions
let count =0 ;
document.getElementById("decrease").onclick= function(){
    count -= 1;
  document.getElementById("count").innerHTML= count ;
};
document.getElementById("reset").onclick= function(){
    count= 0;
    document.getElementById("count").innerHTML= count ;
};
document.getElementById("increase").onclick= function(){
    count += 1;
    document.getElementById("count").innerHTML= count ;
};
*/

//checkbox property
/*
let sub= document.getElementById("sub");
let visa= document.getElementById("visa");
let mastercard= document.getElementById("mastercard");
let mpesa= document.getElementById("mpesa");

document.getElementById("done").onclick= function(){

} ;

document.getElementById("done").onclick= function(){
    if(sub.checked){
        console.log("ur have subscribed");
    }else{
        console.log("u have not subscribed");
    }

    switch(true){
        case visa.checked:
            console.log("you payed by visa");
            break;
        case mastercard.checked:
            console.log("you payed by mastercard");
            break;
        case mpesa.checked:
            console.log("you payed by mpesa");
            break;
        default:
            console.log("please choose a payment method");

    }
}*/

//guessing game using window propt
/*
let answer= Math.ceil(Math.random()*100);
let guess,guesses=0;
do{
guess = window.prompt("enter no. from 1-100: ");

if(guess > answer){
    console.log("your guess is too high");
}else if(guess < answer){
    console.log("your guess is too low");
}
else{
    console.log("congratulations!! you got it \n guesses=",guesses);

}
guesses++;
}while( guess != answer)
*/

// number guessing game using html attributes
 /*           
const answer= Math.floor(Math.random()*10 +1);
let guesses= 0;

document.getElementById("submitbutton").onclick= function(){
    let guess= document.getElementById("guessfield").value;
    guesses+=1;

    if (guess == answer) {
        alert(`${answer} is the #. it took you ${guesses} guesses`);
    }
    else if(guess < answer)
    {
        alert(`too small`);
    }
    else
    {
        alert(`too high`)
    }
}
*/

//TEMPERATURE CONVERTER
/*
document.getElementById("submit").onclick= function(){
    let value= document.getElementById("temp").value;
    cel= document.getElementById("cel");
    fahr= document.getElementById("fahr");
    switch (true)
    {
        case cel.checked:
            value= ((value*9)/5)+32;
           // alert(`${value} F`);
           document.getElementById("ans").innerHTML= "answer:" + value + "F";
            break;
        case fahr.checked:
            value= ((value-32)*5)/9;
            //alert(`${value} C`);
            document.getElementById("ans").innerHTML= "answer:" + value + "C";
            break;
    }

}
*/

/*
//SPREAD OPERATOR

let number = [1,2,3,4,5,6,7,8,9];
console.log(Math.max(...number));

//REST OPERATOR
let a= 1;
let b= 2;
let c= 3;
let d= 4;

function sum(...numbers){
    let total =0;
    for(let number of numbers ){
        total+= number;
    }
    return total;
}

console.log(sum(a,b));

*/


