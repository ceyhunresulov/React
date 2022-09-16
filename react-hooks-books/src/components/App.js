import { Component } from "react";
import BookList from "./BookList";
import BookContextProvider from "../context/BookContext";
import ThemeContextProvider from "../context/ThemeContext";

class App extends Component {
  render() {
    return (
      <ThemeContextProvider>
        <BookContextProvider>
          <BookList></BookList>
        </BookContextProvider>
      </ThemeContextProvider>
    );
  }
}

export default App;
