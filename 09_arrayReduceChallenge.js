/*
  You and a group of friends have spent all day hanging out at a coffee shop. Each person has ordered some number of coffees, and you want to pay the entire bill.
  Given an array of integers > 0 representing the number of coffees each friend ordered, calculate the total price of all coffees. Each coffee costs `$1.25`.

  WRITE YOUR SOLUTION HERE
*/
const calculateCoffeebill = (coArr) => {
  let totalCoffees = coArr.reduce(
    (totalCoffees, noOfCoffees) => (totalCoffees += noOfCoffees),
    0
  );

  return totalCoffees * 1.25;
};

const cofeeArr = [2, 5, 7, 1, 4];
console.log(`Total Coffee bill is $${calculateCoffeebill(cofeeArr)}`)
