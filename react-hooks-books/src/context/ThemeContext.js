import { createContext, Component } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isAuth: true,
    dark: { bg: "#1B2430", title: "#C84B31", hover: "rgba(214, 90, 49, 0.9)" },
    light: { bg: "#EEEEEE", title: "#000000", hover: "rgba(255, 200, 0, 0.9)" },
  };
  changeTheme = () => {
    this.setState({ isAuth: !this.state.isAuth });
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, changeTheme: this.changeTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
export default ThemeContextProvider;
