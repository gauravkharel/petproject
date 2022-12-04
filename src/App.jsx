import { useState, StrictMode } from "react";
import SearchParams from "./SearchParams";

function App() {
  const [count, setCount] = useState(0);

  return (
    <StrictMode>
      <div className="App">
        <h1>Pets for soul</h1>
        <SearchParams />
      </div>
    </StrictMode>
  );
}

export default App;
