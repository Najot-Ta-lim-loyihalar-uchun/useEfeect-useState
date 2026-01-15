import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import MainLayout from "./layouts/MainLoyaut/MainLayout";
import UsersLoyaut from "./layouts/UsersLoyaut/UsersLoyaut";

/* React dom */
import { BrowserRouter, Route, Routes } from "react-router-dom";

/* css */
import "./index.css";

function App() {
  const [selected, setSelected] = useState([]);

  return (
    <BrowserRouter>
      <header className="header">
        <NavBar selectedCount={selected.length} />
      </header>
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout selected={selected} setSelected={setSelected} />
            }
          />

          <Route
            path="/users"
            element={
              <UsersLoyaut selected={selected} setSelected={setSelected} />
            }
          />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
