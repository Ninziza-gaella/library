function BookList({ books }) {
  return (
    <div>
      <h2>Book List</h2>

      {books.length === 0 ? (
        <p>No books added yet.</p>
      ) : (
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <h3>{book.title}</h3>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Summary:</strong> {book.summary}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookList;