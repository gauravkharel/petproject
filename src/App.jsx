import { useState } from "react";
import SearchParams from "./SearchParams";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Hello</h1>
      <SearchParams />
    </div>
  );
}

export default App;
