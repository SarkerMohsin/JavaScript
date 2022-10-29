//Task - 1:
//Create a function to calculate percentage of a number
function percentageCalculator(number, percentage)
{
    return result = number * percentage;//Percentage calculation
    //return result;
}
console.log(percentageCalculator(100, 0.30));//Call the function in Console



// Task - 2: 
//Create a function that will return customer's order message
function drinkOrder(size, buttonName)
{
    let softDrinkLabel;
    switch(buttonName)
    {
        case "cola":
            softDrinkLabel = "Cola";
            break;
        case "lemon":
            softDrinkLabel = "Lemonade";
            break;
        case "orange":
            softDrinkLabel = "Orangeade";
            break;   
            
    }
    console.log(`You have ordered a ${size} of ${softDrinkLabel}.`);
}
drinkOrder("small", "cola");
drinkOrder("medium", "lemon");
drinkOrder("large", "orange");