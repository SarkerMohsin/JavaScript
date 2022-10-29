// Creating a variable and conditional statement
const temperature = 100;

if (temperature < 50){
    console.log("The temperature is below " + temperature + " now.")
}

// Checking condition with logical operators
const checkTemp = 0;

if (checkTemp < 50 && checkTemp >= 30){
    console.log("Wear a coat.");
} 
else if (checkTemp < 30 && checkTemp >= 0 ){
    console.log("Wear a coat and a hat.");
} 
else if (checkTemp < 0 ) {
    console.log("Stay inside");
}
else {
    console.log("Just pants and vest is fine");
}

// Creating multiple if statements and return when it's true
if (checkTemp < 0 ){
    console.log("Stay inside.");
    return;
}

if (checkTemp < 30 ){
    console.log("Wear a coat and a hat.");
    return;
}

if (checkTemp < 50 ) {
    console.log("Wear a coat.");
    return;
}

if (checkTemp >= 50 ){
    console.log("Just pants and vest is fine.");
    return;
}

