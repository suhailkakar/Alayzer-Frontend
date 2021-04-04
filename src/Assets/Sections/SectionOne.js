import React from "react";
import Particles from "../../particles";
import Input from "../Components/input";
import Fade from "react-reveal/Fade";
import Menu from "../Components/Menu";

export default function App() {
  return (
    <div
      style={{ backgroundColor: "#000", marginTop: "-2%", paddingBottom: "2%" }}
    >
      <div className="hero">
        <Menu />
        <Fade bottom>
          <h1 className="heading">
            UNCOVERS THE TECHNOLOGIES USED ON WEBSITES
            <span className="dot__green">.</span>
          </h1>
        </Fade>
        <Fade bottom>
          <h2 className="tagline">
            Find Out What Websites Are Built With
            <span className="dot__white">.</span>
          </h2>
        </Fade>
        <Fade bottom>
          <Input />
        </Fade>
      </div>
      <div className="particles">
        <Particles />
      </div>
    </div>
  );
}
