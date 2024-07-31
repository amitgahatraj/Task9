import { useState } from "react";

import Header from "./header";
import Profile from "./profile.jsx";
import Footer from "./footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Profile />
      <Footer />
    </>
  );
}

export default App;
