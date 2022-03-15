/*
  use filter method on array of objects to get only veg menu from dishes array.
  WRITE YOUR SOLUTION HERE
*/
const dishes = [
  {
    name: "Chicken parmesan",
    isVegetarian: false,
  },
  {
    name: "Penne a la vodka",
    isVegetarian: true,
  },
  {
    name: "Mushroom risotto",
    isVegetarian: true,
  },
  {
    name: "Veal saltambuca",
    isVegetarian: false,
  },
  {
    name: "Filet mignon",
    isVegetarian: false,
  },
];

const getVegetarianMenu = dishes => {
  const vegMenu = dishes.filter(dish => dish.isVegetarian);
  return vegMenu;
}

const vegDishes = getVegetarianMenu(dishes);
console.log(vegDishes);
