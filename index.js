// JS task - Day1 
  
// 🛒 JavaScript Task: Mini Shopping Cart Simulation 
//   Objective: 
//  Write a JavaScript program that simulates adding items to a shopping cart, calculates total cost with tax, applies discount using operators, and displays the result using proper variable types and scope. 
 
// ✅ Requirements: 
// 1.	Variables & Datatypes: Use let, const, and var with various data types (string, number, boolean, array, object). 
// 2.	Scope: Show example of global scope and block/function scope. 
// 3.	Operators: Use arithmetic, comparison, logical, assignment, and ternary operators. 
// 4.	JavaScript Runtime: Show usage of setTimeout() or an event loop concept. 
 
var cart = [];
const tax = 0.07;
// flat discount
const discount = 500;

let products = [
  { id: 1, title: "Classic Cotton Tee", cost: 500, brand: "FabWear" },
  { id: 2, title: "Graphic Print T-shirt", cost: 700, brand: "TrendyLook" },
  { id: 3, title: "Oversized Solid Tee", cost: 800, brand: "UrbanStyle" },
  { id: 4, title: "Striped Crop T-shirt", cost: 600, brand: "ChicVibe" },
  { id: 5, title: "V-Neck Soft T-shirt", cost: 550, brand: "FabWear" },
  { id: 6, title: "Round Neck Casual Tee", cost: 450, brand: "TrendyLook" },
];

function add_to_cart(Orgbrand1, Orgbrand2) {
  cart = products.filter((ele) => {
    return ele.brand == Orgbrand1 || ele.brand == Orgbrand2;
  });

  console.log(cart)
  let OrgCost = 0;
  let totalCost = 0;
  OrgCost = cart.reduce((acc, ele) => {
    return (acc = acc + ele.cost);
  }, 0);
  console.log(`Original Price without any tax and discount :`, OrgCost);

  function taxCost() {
    // totalcost along with tax
    totalCost += OrgCost * tax + OrgCost;
    console.log(`Total Cost after adding tax ${tax} :`, totalCost);
  }
  function disCost() {
    totalCost >= 2000
      ? console.log(
          `Total cost after applying Flat discount ${discount}:`,
          (totalCost -= discount)
        )
      : console.log(
          "Discount can not be applied price less than 2000",
          totalCost
        );
  }
  setTimeout(()=>{
    taxCost()
    disCost()
},1000)
}

setTimeout(()=>{
    add_to_cart("FabWear", "TrendyLook")
}
,1000)
// add_to_cart("FabWear", "TrendyLook")


