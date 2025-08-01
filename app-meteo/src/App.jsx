import "bootstrap/dist/css/bootstrap.min.css";
import NavbarUser from "./components/NavbarUser";
import Home from "./components/Home";
import FooterSection from "./components/FooterSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Previsioni from "./components/Previsioni";
import "./App.css";
import { useState } from "react";

function App() {
  const [locationSearch, setLocationSearch] = useState("");
  const [found, setFound] = useState(false);

  const searchLoc = (location) => {
    setLocationSearch(location);
    setFound(true);
  };

  return (
    <>
      <BrowserRouter>
        <header>
          <NavbarUser location={locationSearch} search={searchLoc} />
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <main className="mt-3">
                <Home location={locationSearch} found={found} />
              </main>
            }
          />
          <Route
            path="/previsioni"
            element={
              <main className="mt-3">
                <Previsioni />
              </main>
            }
          />
        </Routes>
        <footer>
          <FooterSection />
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
