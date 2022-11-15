import "./Landing.css";
import Animations from "./Animations";
import React, { useEffect, useCallback } from "react";
import { Contentfull } from "../Contentfull";

const Landing = () => {
  const getLanding = useCallback(async () => {
    try {
      var response = Contentfull();
      await response.getEntry(process.env.REACT_APP_GETENTRY).then((entry) => {
        cleanData(entry.fields);
      });
    } catch (error) {
      console.log(error);
    }
  });

  function cleanData(params) {
    console.log(params);
    var logo = document.getElementById("logo");
    var hero = document.getElementById("heroBackground");
    var heroTextH1 = document.getElementById("hero-text-h1");
    var heroTextDescription = document.getElementById("hero-text-description");

    heroTextH1.innerHTML = " ";
    heroTextDescription.innerHTML = " ";
    /* get content and added to a documenet*/
    logo.src = params.logo.fields.file.url;
    heroTextH1.innerHTML += params.titleHero;
    heroTextDescription.innerHTML += params.heroDescription;
    hero.src = params.heroImage.fields.file.url;
  }

  useEffect(() => {
    getLanding();
  }, [getLanding]);
  Animations();
  return (
    <div id="content">
      <nav id="navbar">
        <img id="logo" alt="Imperial logo"></img>
        <a href="/">Productos</a>
        <a href="/">Ingresar</a>
        <a href="/">Pagos</a>
      </nav>
      <div id="hero-text">
        <h1 id="hero-text-h1"></h1>
        <p id="hero-text-description"></p>
        <button className="imperial-btn">Saber más</button>
      </div>
      <div id="hero-img">
        <img id="heroBackground" alt="hero background"></img>
      </div>
    </div>
  );
};
export default Landing;
