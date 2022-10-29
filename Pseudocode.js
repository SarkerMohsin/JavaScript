// First pecudocode Challeng to Print FIZZBUZZ

//Loop through the number 1-20
let number; 

for (number = 1; number <= 20; number++)
{
    //IF number divided by 3 equal 0 print "FIZZ"
    if ((number % 3 === 0) && (number % 5 === 0))
    {
        console.log("FIZZBUZZ");
    }
    //IF number divided by 3 equal 0 print "FIZZ"
    else if (number % 5 === 0)
    {
        console.log("BUZZ");
    }
    //IF number divided by 3 equal 0 print and IF number divided by 5 equal 0 print "FIZZBUZZ"
    else if (number % 3 === 0)
    {
        console.log("FIZZ")
    }
    else
    {
        console.log(number);
    }
}


// 2nd Challenge 

//Creates an object for favourite recipes
const recipes = {
    //List all recipes
    title: "Milk Shake",
    servings: 2,
    ingredients: ["Milk", "Suger", "Strawberry", "Banana"],
    direction: "Ready to drink"
}
//Loop through the object and print all ingredients
for (let i = 0; i < recipes.ingredients.length; i++)
{
    console.log(recipes.ingredients[i]);
}


