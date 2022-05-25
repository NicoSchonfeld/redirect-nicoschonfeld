import React from "react";
import Logo from "../image/Logo.svg";

export default function Loading() {
  return (
    <>
      <section className="section">
        <div className="wrapper">
          <img src={Logo} alt={"Logo Nico Schönfeld"} />

          <p className="by">
            By <span>NicoSchönfeld</span>
          </p>
        </div>
      </section>
    </>
  );
}
