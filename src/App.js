import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import PageHome from "./components/PageHome";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route
            path="*"
            element={
              <div className="section">
                <div className="wrapper">
                  <h4 className="rubro">404</h4>
                  <h2 className="title">¡Ooooooops!</h2>
                  <p className="rubro">
                    La página que esta buscando no se encuentra {`:(`}
                  </p>
                  <Link to={"/"} className="volver">
                    Volver
                  </Link>
                </div>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
