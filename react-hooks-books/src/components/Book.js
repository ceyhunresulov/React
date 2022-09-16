import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default class Book extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(themeContext) => {
          const { isAuth, dark, light } = themeContext;
          const theme = isAuth ? dark : light;
          return (
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-bs-toggle="modal"
                  href="#portfolioModal6"
                >
                  <div
                    className="portfolio-hover"
                    style={{ backgroundColor: theme.hover }}
                  >
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src={this.props.book.imageURL}
                    alt="..."
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">
                    {this.props.book.title}
                  </div>
                  <div className="portfolio-caption-subheading text-muted">
                    {this.props.book.author}
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
