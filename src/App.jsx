import "./App.css";

import {
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Home from "./pages/Home";
import SavedCountries from "./pages/SavedCountries";
import CountryDetail from "./pages/CountryDetail";

import localData from "../localData";

function App() {
  return (
    <div className="app-container">
      {/* HEADER */}

      <header className="header">
        <Link
          to="/"
          className="logo-link"
        >
          Where in the world?
        </Link>

        <Link
          to="/saved"
          className="saved-link"
        >
          Saved Countries
        </Link>
      </header>

      {/* ROUTES */}

      <Routes>
        <Route
          path="/"
          element={
            <Home
              countriesData={localData}
            />
          }
        />

        <Route
          path="/saved"
          element={<SavedCountries />}
        />

        <Route
          path="/country/:countryName"
          element={<CountryDetail />}
        />
      </Routes>
    </div>
  );
}

export default App;