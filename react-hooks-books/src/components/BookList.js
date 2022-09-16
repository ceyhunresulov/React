import React, { Component } from "react";
import Book from "./Book";
import { BookContext } from "../context/BookContext";
import { ThemeContext } from "../context/ThemeContext";

export default class BookList extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(themeContext) => (
          <BookContext.Consumer>
            {(value) => {
              const { changeTheme, isAuth, dark, light } = themeContext;
              const theme = isAuth ? dark : light;
              return (
                <section
                  className="page-section"
                  style={{ backgroundColor: theme.bg }}
                  id="portfolio"
                >
                  <div className="container">
                    <div className="text-center">
                      <h2
                        className="section-heading text-uppercase"
                        style={{ color: theme.title }}
                      >
                        Portfolio
                      </h2>
                      <h3 className="section-subheading text-muted mb-4">
                        Lorem ipsum dolor sit amet consectetur.
                      </h3>
                      <button
                        type="button"
                        className="btn mb-5"
                        style={{ background: theme.hover }}
                        onClick={() => changeTheme()}
                      >
                        change theme
                      </button>
                    </div>
                    <div className="row">
                      {value.books.map((b, i) => (
                        <Book key={i} book={b}></Book>
                      ))}
                    </div>
                  </div>
                </section>
              );
            }}
          </BookContext.Consumer>
        )}
      </ThemeContext.Consumer>
    );
  }
}
