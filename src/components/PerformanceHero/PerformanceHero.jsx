import { useEffect, useState } from "react";
import "./PerformanceHero.css";

function PerformanceHero() {
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
      className="performance-hero"
      style={{
        "--hero-darkness": heroDarkness,
      }}
    >
      <div className="performance-hero-content"></div>
    </section>
  );
}

export default PerformanceHero;