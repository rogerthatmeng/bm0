import "./App.css";
import { useEffect } from "react";
import { Route, useLocation } from "react-router-dom";

import Header from "./components/header";
import { ROUTES } from "./utils/routes";

const excludes = [
  "/email/microsoft",
  "/email/gmail",
  "/email/yahoo",
  "/email/aol",
];

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div
      className={`${
        !excludes.includes(location.pathname) && "min-h-screen bg-[#f5f6f7]"
      }`}
    >
      {!excludes.includes(location.pathname) && <Header />}

      {ROUTES.map((route, idx) => (
        <Route
          key={idx}
          exact
          {...route}
        />
      ))}
    </div>
  );
}

export default App;
