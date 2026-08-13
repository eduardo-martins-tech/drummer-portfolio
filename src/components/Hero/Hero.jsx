import { useEffect, useState } from "react";
import "./Hero.css";

import heroImage from "../../assets/images/hero.png";
import HeroBackgroundText from "../HeroBackgroundText/HeroBackgroundText";

function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const heroDarkness = Math.min(scrollY / 500, 0.45);

  return (
    <section
      className="hero"
      style={{
        "--hero-darkness": heroDarkness,
      }}
    >
      <img
        src={heroImage}
        alt="Eduardo Martins durante apresentação"
        className="hero-image"
      />

      <div className="hero-title">
        <h2>
          <span className="blue">Eduardo</span>{" "}
          <span className="white">Martins</span>
        </h2>
      </div>

      <div className="hero-subtitle">
        <p>
          Uma trajetória construída entre estúdios,
          palcos e grandes encontros.
        </p>
      </div>

      <HeroBackgroundText />
    </section>
  );
}

export default Hero;