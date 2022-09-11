import axios from "axios";
import { Component } from "react";
import { Row } from "reactstrap";
import MoviList from "./MoviList";
import SearchBar from "./SearchBar";

class App extends Component {
  state = {
    movies: [],
    searchValue: "",
  };

  componentDidMount() {
    const baseUrl =
      "https://api.themoviedb.org/3/list/8216847?api_key=10ba6c7149c9f1eede0338c72d8bc9d0&language=en-US";
    axios
      .get(baseUrl)
      .then((res) => {
        this.setState({ movies: res.data.items });
      })
      .catch((err) => err);
  }
  removeCard = async (id) => {
    const baseUrl = `https://api.themoviedb.org/3/list/8216847/remove_item?media_id=${id}&session_id=da8fe59a660de8fb85e882da8602509d850dd25b&api_key=10ba6c7149c9f1eede0338c72d8bc9d0`;
    await axios.post(baseUrl);
    let newState = this.state.movies.filter((c) => c.id !== id);
    this.setState({ movies: newState });
  };

  getSearchValue = (e) => {
    this.setState({ searchValue: e.target.value });
  };
  render() {
    let filteredMovi = this.state.movies.filter((m) => {
      return (
        m.title.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !==
        -1
      );
    });
    return (
      <div className="container-fluit bg-dark">
        <Row className="d-flex justify-content-center m-0">
          <SearchBar getSearchValue={this.getSearchValue}></SearchBar>
        </Row>
        <MoviList
          removeCard={this.removeCard}
          moviList={filteredMovi}
        ></MoviList>
      </div>
    );
  }
}

export default App;
