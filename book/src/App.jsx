import { useState } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Book Manager</h1>

      <BookForm onAddBook={addBook} />

      <BookList books={books} />
    </div>
  );
}

export default App;