// Creating a new function here 
function myFunction(){
    console.log("This is my new function.");
}
myFunction();


// Creating function with parameters
function myName(firstName, lastName){
    console.log(`Hey my name is ${firstName} ${lastName}`);
}
myName("Mohsin", "Sarker");
myName("Jonh", "Harber");

//Creating a function with a return statement 
function addNumber(x , y){
    return (`Hey I am adding x and y  ${x + y}`);
}
const result = addNumber(5, 10);
console.log(result);