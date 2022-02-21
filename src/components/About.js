import React, { useEffect } from "react";
import bounce from "../script/bounce";

export default function About() {
  useEffect(() => {
    document.title = "Tomi Wolf  | About Me ";

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
              A
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              b
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              o
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              u
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              t&nbsp;
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              m
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              e
            </span>
          </h1>
          <p align="LEFT">
            A skilled and knowledgeable computer science student with extensive
            knowledge of <strong>programming</strong> and&nbsp;
            <strong>computer applications</strong> . 👨‍💻
            <br />
            <br />
            Well-organised enthusiastic person, problem solver, quick learner,
            debugger and,
            <br />
            a fan of " The Office ", Outdoor Sports, TV series, Music, and
            recently, Gaming.
            <br />
            <br />
            Interested in the development spectrum and actively looking for an
            opportunity in the field of Software Engineering.
            <br />
            <br />
            Follow me on&nbsp;
            <a
              href="https://twitter.com/smrnjeet_22"
              style={{ color: "#23ffde" }}
            >
              Twitter&nbsp;
            </a>
            to know more or just&nbsp;
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
          src={`https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/code${
            Math.floor(Math.random() * 3) + 2
          }.svg`}
        />
      </div>
    </>
  );
}
