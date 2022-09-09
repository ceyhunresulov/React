import { Component } from "react";
import { Row, Col } from "reactstrap";
import MoviList from "./MoviList";
import SearchBar from "./SearchBar";

class App extends Component {
  state = {
    movies: [
      {
        id: 1,
        name: "The Flash",
        rating: 8.3,
        overview:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        imageURL:
          "https://image.tmdb.org/t/p/w220_and_h330_face/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg",
      },

      {
        id: 2,
        name: "Interstellar",
        rating: 6.8,
        overview:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        imageURL:
          "https://image.tmdb.org/t/p/w220_and_h330_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      },

      {
        id: 3,
        name: "Arrow",
        rating: 7.9,
        overview:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        imageURL:
          "https://image.tmdb.org/t/p/w220_and_h330_face/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg",
      },
      {
        id: 4,
        name: "Arrow",
        rating: 7.9,
        overview:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        imageURL:
          "https://image.tmdb.org/t/p/w220_and_h330_face/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg",
      },
      {
        id: 5,
        name: "Arrow",
        rating: 7.9,
        overview:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        imageURL:
          "https://image.tmdb.org/t/p/w220_and_h330_face/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg",
      },
      {
        id: 6,
        name: "Arrow",
        rating: 7.9,
        overview:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        imageURL:
          "https://image.tmdb.org/t/p/w220_and_h330_face/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg",
      },
    ],
  };
  removeCard = (id) => {
    console.log(id);
    let newState = this.state.movies.filter((c) => c.id !== id);
    this.setState({ movies: newState });
  };

  findMovi = (name) => {
    let newState = this.state.movies.filter((c) => name === c.name);
    this.setState({ movies: newState });
  };
  render() {
    return (
      <div className="container">
        <Row className="d-flex justify-content-center">
          <SearchBar findMovi={this.findMovi}></SearchBar>
        </Row>
        <MoviList
          removeCard={this.removeCard}
          moviList={this.state.movies}
        ></MoviList>
      </div>
    );
  }
}

export default App;
