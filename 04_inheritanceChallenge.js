/*
  Using inheritance show technical books and edition year.
*/

class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  // Getter
  get availability() {
    return this.getAvailability();
  }

  // Method
  getAvailability() {
    if (this.numCopies === 0) {
      return "Out of stock";
    } else if (this.numCopies < 10) {
      return "Low stock";
    }
    return "In stock";
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }

  restock(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  }
}

class TechnicalBook extends Book {
  constructor(title, author, ISBN, numCopies, edition) {
    super(title, author, ISBN, numCopies);
    this.edition = edition;
  }

  // method to print edition string
  getEdition() {
    return `The current version of this book is ${this.edition}`;
  }
}

const harryPotterBooks = new Book("Harry Potter", "JK Rowling", "123456", 5);
console.log(harryPotterBooks.availability);
harryPotterBooks.restock(16);
console.log(harryPotterBooks.availability);
harryPotterBooks.sell(21);
console.log(harryPotterBooks.availability);

const jsBook = new TechnicalBook(
  "Javascript: The Definitive Guide",
  "David Flanagan",
  "465789",
  10,
  "5"
);

console.log(jsBook.availability);
console.log(jsBook.getEdition());
