import "./AudioHero.css";
import drumsAudio from "../../assets/images/drums-audio.png";

function AudioHero() {
    return (
        <section className="audio-hero">

            <div className="audio-hero-image">
                <img
                    src={drumsAudio}
                    alt="Setup de bateria"
                />
            </div>

            <div className="audio-hero-overlay"></div>

            <div className="audio-hero-content">

                <span className="audio-hero-label">
                    ♫ ÁUDIOS
                </span>

                <h1>
                    DISCOGRAFIA
                </h1>

                <p>
                    Ouça trechos exclusivos e acesse as faixas completas.
                </p>

            </div>

        </section>
    );
}

export default AudioHero;