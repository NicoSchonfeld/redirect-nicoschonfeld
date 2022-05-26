import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import MePhoto from "../image/photoNico.png";

export default function PageHome() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <main className="main">
            <div className="wrapperHome">
              <div className="containerUser">
                <img src={MePhoto} alt={"Me photo"} width={90} height={90} />
                <h1 className="title">Nicolás Schönfeld</h1>
                <h3 className="rubro">Desarrollador Web</h3>
              </div>

              <div className="containerRedes">
                <a
                  className="btn"
                  href="https://nsfrontend.vercel.app"
                  target={"_blank"}
                >
                  Cursos
                </a>
                <a
                  className="btn"
                  href="https://nicoschonfeld.vercel.app"
                  target={"_blank"}
                >
                  Portfolio
                </a>

                <a
                  className="btn"
                  href="https://www.linkedin.com/in/nicoschonfeld/"
                  target={"_blank"}
                >
                  LinkedIn
                </a>

                <a
                  className="btn"
                  href="https://github.com/NicoSchonfeld"
                  target={"_blank"}
                >
                  Github
                </a>

                <a
                  className="btn"
                  href="https://www.instagram.com/nicoschonfeld_/"
                  target={"_blank"}
                >
                  Instagram
                </a>
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
}
