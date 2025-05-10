import React from 'react';

// Functional component representing a Document
function Document({ id, dateEdition }) {
  return (
    <div>
      <p>ID: {id}</p>
      <p>Edition Date: {dateEdition}</p>
    </div>
  );
}

// Functional component representing a Book, conceptually inheriting from Document
function Livre({ id, dateEdition, title, author }) {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h3>Book</h3>
      <p>ID: {id}</p>
      <p>Title: {title}</p>
      <p>Author: {author}</p>
      <p>Edition Date: {dateEdition}</p>
    </div>
  );
}

function App() {
  // Create two conceptual instances of Document
  const document1 = { id: 1, dateEdition: '1/1/2024' };
  const document2 = { id: 2, dateEdition: '15/03/2025' };

  // Create three conceptual instances of Book
  const livre1 = { id: 11, title: 'POO', author: 'Auteur1', dateEdition: '4/4/2023' };
  const livre2 = { id: 12, title: 'Python pour les nuls', author: 'Auteur2', dateEdition: '10/05/2024' };
  const livre3 = { id: 13, title: 'Les secrets de Java', author: 'Auteur3', dateEdition: '20/11/2024' };

  let books = [
    { id: 1, title: "POO", author: "auteur1", price: 300 },
    { id: 2, title: "HTML", author: "auteur2", price: 100 },
    { id: 3, title: "CSS", author: "auteur3", price: 200 },
    { id: 4, title: "Javascript", author: "auteur1", price: 200 },
  ];

  // 1. Create title list containing all titles from books using map.
  const titleList = books.map((book) => book.title);

  // 2. Create the list titlesAuthor1 containing all books by author author1 from books using filter.
  const titlesAuthor1 = books.filter((book) => book.author === "auteur1");

  // 3. Find the book whose id is equal to 2 using find.
  const bookWithId2 = books.find((book) => book.id === 2);

  // 4. Calculate total prices using reduce.
  const totalPrice = books.reduce((acc, book) => acc + book.price, 0);

  // 5. Create an Array myBooks copy of books.
  const myBooks = [...books]; //spread operator to copy the array

  return (
    <div>
      <h2>Documents</h2>
      <Document {...document1} />
      <Document {...document2} />

      <h2>Books</h2>
      <div>
        <Livre {...livre1} />
        <Livre {...livre2} />
        <Livre {...livre3} />
      </div>

      <h2 style={{ textAlign: "center" }}>======================================</h2>
      <h2 style={{ color: "red", fontFamily: "sans-serif", marginLeft: "25px" }}>Books with prices</h2>
      <div>
        {books.map((book) => (
          <Livre key={book.id} {...book} />
        ))}
      </div>

      <div style={{ marginLeft: "25px" }}>
        <h3 style={{ color: "green", fontFamily: "sans-serif" }}>Title List</h3>
        <ul>
          {titleList.map((title, index) => (
            <li key={index} style={{ color: "blue", fontFamily: "sans-serif" }}>
              {title}
            </li>
          ))}
        </ul>

        <h3 style={{ color: "green", fontFamily: "sans-serif" }}>Books by Author1</h3>
        <ul>
          {titlesAuthor1.map((book) => (
            <li key={book.id} style={{ color: "blue", fontFamily: "sans-serif" }}>
              {book.title}
            </li>
          ))}
        </ul>

        <h3 style={{ color: "green", fontFamily: "sans-serif" }}>Book with ID 2</h3>
        {bookWithId2 ? (
          <ul>
            <li style={{ color: "blue", fontFamily: "sans-serif" }}>
              {bookWithId2.title}
            </li>
          </ul>
        ) : (
          <p style={{ color: "red", fontFamily: "sans-serif" }}>Book not found</p>
        )}

        <h3 style={{ color: "green", fontFamily: "sans-serif" }}>Total Price</h3>
        <p style={{ color: "blue", fontFamily: "sans-serif" }}>
          {totalPrice}
        </p>

        <h3 style={{ color: "green", fontFamily: "sans-serif" }}>My Books</h3>
        <ul>
          {myBooks.map((book) => (
            <li key={book.id} style={{ color: "blue", fontFamily: "sans-serif" }}>
              {book.author} - {book.title} - {book.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
