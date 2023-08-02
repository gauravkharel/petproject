import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, initialState);
  
    return <ThemeContext.Provider value={{ state: state, dispatch: dispatch }}>{props.children}</ThemeContext.Provider>;
  }

const [darkMode, setDarkMode] = useState(false)

const toggleDarkMode = () => {
    setDarkMode(!darkMode)
}

const themeReducer = (isDarkMode, action) => {
    switch (action.type){
        case "LIGHTMODE":
            return { darkMode: false};
        case "DARKMODE": 
            return {darkMode: true};
        default:
            return false;
        }
}



