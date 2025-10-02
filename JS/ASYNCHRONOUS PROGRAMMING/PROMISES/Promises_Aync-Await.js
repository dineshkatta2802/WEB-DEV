let orderPizza = new Promise(function(resolve, reject) {
    let delivered = true;
    if (delivered) {
        resolve("Arrived");
    } else {
        reject("Something went wrong!!!");
    }
});

async function getPizza() {
    try {
        const message = await orderPizza;
        console.log("Yay!", message);
    } catch (error) {
        console.log("Oh no!", error);
    }
}

getPizza();


//--------------------Promise Chaining with Async and Await

// function orderPizza() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Pizza delivered 🍕"), 1000);
//   });
// }

// function orderDrink() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Drink delivered 🥤"), 1000);
//   });
// }

// function orderDessert() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Dessert delivered 🍰"), 1000);
//   });
// }

// async function completeMeal() {
//   try {
//     const pizza = await orderPizza();
//     console.log(pizza);

//     const drink = await orderDrink();
//     console.log(drink);

//     const dessert = await orderDessert();
//     console.log(dessert);

//     console.log("Meal complete! 🎉");
//   } catch (error) {
//     console.log("Something went wrong! ❌", error);
//   }
// }

// completeMeal();
