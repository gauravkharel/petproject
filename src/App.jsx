import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, StrictMode } from "react";
import SearchParams from "./SearchParams";
import AdoptedPetContext from "./AdoptedPetContext";
import { ThemeProvider } from "./ThemeContext";

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
  // const theme = useContext(ThemeContext);
  // const darkMode = theme.state.darkMode;
  return (
    <div>
      <BrowserRouter>
        {/* <ThemeProvider> */}
          <AdoptedPetContext.Provider value={adoptedPet}>
            <QueryClientProvider client={queryClient}>
              <header>
                <Link to="/">Adopt Me!</Link>
              </header>
              <Routes>
                <Route path="/details/:id" element={<Details />} />
                <Route path="/" element={<SearchParams />} />
              </Routes>
            </QueryClientProvider>
          </AdoptedPetContext.Provider>
        {/* </ThemeProvider> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
