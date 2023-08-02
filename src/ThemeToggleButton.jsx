import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";


export default function ThemeToggleMode() {
    const theme = useContext(ThemeContext);
    const [mode, setMode] = useState('darkMode')
    const onClick = () => {
      if (darkMode)
        theme.dispatch({ type: "LIGHTMODE" });
      else
        theme.dispatch({ type: "DARKMODE" });
    };
  
    return (
      <button className={`btn ${darkMode ? "btn-dark" : "btn-light"}`} onClick={onClick}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    );
}