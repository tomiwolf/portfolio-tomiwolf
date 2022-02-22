import React, { useEffect } from "react";
import bounce from "../script/bounce";

export default function Skills() {
  useEffect(() => {
    document.title = "Tomi Wolf  | Skills ";

    bounce();
  }, []);

  return (
    <>
      <div className="container home-page">
        <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
        <div className="text-zone">
          <h1
            aria-label=" Hi, I’m Tomi Wolf,web developer."
            className="blast-root"
          >
            <span className="blast" style={{ color: "#23ffde" }}>
              Skills&nbsp;
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              &&nbsp;
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              Experience
            </span>
          </h1>
          <p align="LEFT">
            The main area of my expertise is Blockchain and Web development.
            <br />
            <br />
            Tech I know:
            &nbsp;&nbsp; <b>Typescript &nbsp;|&nbsp; Solidity &nbsp;|&nbsp; Javascript</b><br />
            <br />
            &nbsp;&nbsp; • &nbsp;&nbsp; Blockchain | Ethereum | Solana<br />
            &nbsp;&nbsp; • &nbsp;&nbsp; Hardhat, Truffle, Remix<br />
            &nbsp;&nbsp; • &nbsp;&nbsp; ReactJs, NextJs <br />
            &nbsp;&nbsp; • &nbsp;&nbsp; Angular <br />
            &nbsp;&nbsp; • &nbsp;&nbsp; NodeJs , Express<br />
            &nbsp;&nbsp; • &nbsp;&nbsp; Git, Adobe PS<br />
            <br />
            <br />
            Visit my&nbsp;
            <a
              href="https://www.linkedin.com/in/tomas-wolfmann-35518a1a5/"
              style={{ color: "#23ffde" }}
            >
              LinkedIn&nbsp;
            </a>
            profile for more details or just&nbsp;
            <a href="/contact" style={{ color: "#23ffde" }}>
              contact&nbsp;
            </a>
            me.
          </p>
        </div>

        <span className="tags bottom-tags" style={{ bottom: "10px" }}>
          &nbsp;&nbsp;&nbsp;&lt;/body&gt;
          <br />
          &lt;/html&gt;
        </span>
      </div>
      <div id="mysvg">
        <img
          alt="hacker"
          src={`https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/code${Math.floor(Math.random() * 3) + 2}.svg`}
        />
      </div>
    </>
  );
}
