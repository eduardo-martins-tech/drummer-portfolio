import "./Hero.css";
import heroImage from "../../assets/hero.jpg";

function Hero() {
  return (
    <section className="hero">
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
    </section>
  );
}

export default Hero;