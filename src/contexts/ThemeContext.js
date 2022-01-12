import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { syntax: '#263238', ui: '#CFD8DC', bg: '#ECEFF1' },
    dark: { syntax: '#ECEFF1', ui: '#607D8B', bg: '#90A4AE' }
  }
  toggleTheme= () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  }
  render() { 
    return (
      <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
 
export default ThemeContextProvider;
