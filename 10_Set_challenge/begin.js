/*
  You're organizing a food truck festival with many different vendors. Each vendor has a menu and some vendors might be serving the same item.

  Given an array of food truck menus, return one master menu which contains all food items to be served, without duplicates.
  
  WRITE YOUR SOLUTION HERE
*/

const foodTruckFestival = (menus) => {
  let singlemenus = menus.flat();
  const combinedMenu = new Set();

  singlemenus.forEach((menuItem) => {
    combinedMenu.add(menuItem);
  });

  const menuNode = document.getElementById("combined-menu");
  for (let menuItem of combinedMenu) {
    let foodNode = document.createElement("li");
    foodNode.innerText = menuItem;
    menuNode.appendChild(foodNode);
  }
};

const menu = [["Tacos", "Burgers"], ["Pizza"], ["Burgers", "Fries"]];

foodTruckFestival(menu);
