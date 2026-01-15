import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import MainLayout from "./layouts/MainLoyaut/MainLayout";

/* css */
import "./index.css";

function App() {
  const [selected, setSelected] = useState([]);

  return (
    <>
      <header className="header">
        <NavBar selectedCount={selected.length} />
      </header>
      <main className="main container">
        <MainLayout selected={selected} setSelected={setSelected} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
