import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, StrictMode, useContext } from "react";
import SearchParams from "./SearchParams";
import AdoptedPetContext from "./AdoptedPetContext";
import { ThemeContext, ThemeProvider } from "./ThemeContext";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  const adoptedPet = useState(null);
  const theme = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState[false]
  const onClick = () => {
    if (darkMode) theme.dispatch({ type: "LIGHTMODE" });
    else theme.dispatch({ type: "DARKMODE" });
  };
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider>
          <AdoptedPetContext.Provider value={adoptedPet}>
            <QueryClientProvider client={queryClient}>
              <header>
                <Link to="/">Adopt Me!</Link>
               
              </header>
              <button
                  className={`btn ${setDarkMode ? "btn-dark" : "btn-light"}`}
                  onClick={onClick}
                >
                  {setDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                </button>
              <Routes>
                <Route path="/details/:id" element={<Details />} />
                <Route path="/" element={<SearchParams />} />
              </Routes>
            </QueryClientProvider>
          </AdoptedPetContext.Provider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}


export default App;
