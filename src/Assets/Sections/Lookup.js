import React from "react";
import Menu from "../Components/Menu";
import axios from "axios";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";

export default function Test() {
  function getdata() {
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": "i3S4aZNn3m4yCGZIDqgem2PDfexN7W2q8AWlPgs2",
    };
    console.log("Started");
    axios
      .get("https://api.wappalyzer.com/credits/v2/balance/", {
        "Content-Type": "application/json",
        "x-api-key": "i3S4aZNn3m4yCGZIDqgem2PDfexN7W2q8AWlPgs2",
      })
      .catch((err) => {
        console.log("😢😢😢😢😢😢😢😢😢😢😢😢");
      });
  }
  return (
    <div
      className="lookupscreen"
      style={{
        backgroundColor: "#000",
        marginTop: "-2%",
      }}
    >
      <div style={{ paddingTop: "2%" }}>
        <Menu />
        <div className="lookup__info">
          <div style={{ paddingTop: "1%" }} />
          <h1 className="lookup__domain">SUHAILKAKAR.COM</h1>
        </div>
        <div className="lookup__main">
          <div className="lookup__data">
            <h2 className="lookup__technologies__title">
              Analytics and Tracking
            </h2>
            <h1 className="lookup__technologies__name">Google Adsense</h1>
            <p className="lookup__technologies__description">
              Google AdSense is a program run by Google through which website
              publishers in the Google Network of content sites serve text,
              images, video, or interactive media advertisements that are
              targeted to the site content and audience. These advertisements
              are administered, sorted, and maintained by Google
            </p>
          </div>
          <button onClick={getdata}>Click Here </button>
        </div>
      </div>
    </div>
  );
}
