import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    {title: 'In Search of Lost Time', id: 1},
    {title: 'Ulysses', id: 2},
    {title: 'Don Quixote', id: 3},
    {title: 'One Hundred Years of Solitude', id: 4}
  ]);
  return (
    <BookContext.Provider value={{books}}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider;