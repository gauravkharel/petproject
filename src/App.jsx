import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";
import { useState, StrictMode } from "react";
import SearchParams from "./SearchParams";

function App() {
  const [count, setCount] = useState(0);

  return (
    <StrictMode>
      <div className="App">
        <BrowserRouter>
          <Link to="/"><h1>Adopt Me!</h1></Link>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </div>

    </StrictMode>
  );
}

export default App;
