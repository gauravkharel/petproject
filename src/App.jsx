import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, StrictMode } from "react";
import SearchParams from "./SearchParams";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  }
})

function App() {
  const [count, setCount] = useState(0);

  return (
    <StrictMode>
      <div className="App">
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
          <Link to="/"><h1>Adopt Me!</h1></Link>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
          </QueryClientProvider>
          
        </BrowserRouter>
      </div>

    </StrictMode>
  );
}

export default App;
