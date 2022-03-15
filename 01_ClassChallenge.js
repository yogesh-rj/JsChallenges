/*
  Check Book availibility with status by implementing Class in javascript.
  and show if availibility status as 'Not in Stock' when noOf copies are zero,
  'Low Stock' when copies are less than 10 and ''In Stock when copies are greater than 10. 
  WRITE YOUR SOLUTION HERE
*/
class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  // getter for availability
  get availability() {
    return this.getAvailibility();
  }

  // method for get availibility
  getAvailibility() {
    if (this.numCopies === 0) {
      return "Out of stock";
    } else if (this.numCopies < 10) {
      return "Low stock";
    }
    return "In Stock";
  }

  // for sell of the book
  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }

  // for restock of the book
  restock(numCopiesStocked = 1) {
    this.numCopies += numCopiesStocked;
  }
}

const harryPotterBooks = new Book("Harry Potter","JK Rowling","123456",5);
console.log(harryPotterBooks.availability);
harryPotterBooks.restock(16);
console.log(harryPotterBooks.availability);
harryPotterBooks.sell(21);
console.log(harryPotterBooks.availability);
