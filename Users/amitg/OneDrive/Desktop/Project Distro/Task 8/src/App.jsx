import { useState } from "react";

import "./App.css";
import Navbar from "./navbar";
import Hero from "./hero";
import Card from "./card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
}

export default App;
