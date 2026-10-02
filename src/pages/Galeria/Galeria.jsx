import { useEffect, useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./Galeria.css";
import heroGaleria from "../../assets/images/hero-galeria.png";

import galeria01 from "../../assets/galeria/galeria-01.jpg";
import galeria02 from "../../assets/galeria/galeria-02.jpg";
import galeria03 from "../../assets/galeria/galeria-03.jpg";
import galeria04 from "../../assets/galeria/galeria-04.jpg";
import galeria05 from "../../assets/galeria/galeria-05.jpg";
import galeria07 from "../../assets/galeria/galeria-07.jpg";
import galeria08 from "../../assets/galeria/galeria-08.jpg";
import galeria09 from "../../assets/galeria/galeria-09.jpg";
import galeria12 from "../../assets/galeria/galeria-12.jpg";
import galeria13 from "../../assets/galeria/galeria-13.jpg";
import galeria14 from "../../assets/galeria/galeria-14.jpg";
import galeria15 from "../../assets/galeria/galeria-15.jpg";
import galeria16 from "../../assets/galeria/galeria-16.jpg";
import galeria17 from "../../assets/galeria/galeria-17.jpg";

const fotos = [
    { imagem: galeria01, numero: 1 },
    { imagem: galeria02, numero: 2 },
    { imagem: galeria03, numero: 3 },
    { imagem: galeria04, numero: 4 },
    { imagem: galeria05, numero: 5 },
    { imagem: galeria07, numero: 7 },
    { imagem: galeria08, numero: 8 },
    { imagem: galeria09, numero: 9 },
    { imagem: galeria12, numero: 12 },
    { imagem: galeria13, numero: 13 },
    { imagem: galeria14, numero: 14 },
    { imagem: galeria15, numero: 15 },
    { imagem: galeria16, numero: 16 },
    { imagem: galeria17, numero: 17 },
];

function Galeria() {

    const [fotoAberta, setFotoAberta] = useState(null);

    const abrirFoto = (index) => {
        setFotoAberta(index);
    };

    const fecharFoto = () => {
        setFotoAberta(null);
    };

    const fotoAnterior = () => {
        setFotoAberta((atual) => {

            if (atual === 0) {
                return fotos.length - 1;
            }

            return atual - 1;
        });
    };

    const proximaFoto = () => {
        setFotoAberta((atual) => {

            if (atual === fotos.length - 1) {
                return 0;
            }

            return atual + 1;
        });
    };

    useEffect(() => {

        if (fotoAberta === null) {
            return;
        }

        const handleKeyDown = (event) => {

            if (event.key === "Escape") {
                setFotoAberta(null);
            }

            if (event.key === "ArrowLeft") {
                setFotoAberta((atual) => {

                    if (atual === 0) {
                        return fotos.length - 1;
                    }

                    return atual - 1;
                });
            }

            if (event.key === "ArrowRight") {
                setFotoAberta((atual) => {

                    if (atual === fotos.length - 1) {
                        return 0;
                    }

                    return atual + 1;
                });
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };

    }, [fotoAberta]);

    return (
        <>
            <Navbar />

            <main className="galeria">

                {/* =========================
                    HERO
                ========================= */}

                <section className="galeria-hero">

                    <div className="galeria-hero-image">

                        <img
                            src={heroGaleria}
                            alt="Prato de bateria em ambiente de palco"
                        />

                    </div>

                    <div className="galeria-hero-overlay"></div>

                    <div className="galeria-hero-content">

                        <h1>
                            REGISTROS
                        </h1>

                        <p>
                            Alguns cliques backstage, shows e gravações.
                        </p>

                    </div>

                </section>


                {/* =========================
                    FOTOS
                ========================= */}

                <section className="galeria-fotos">

                    <div className="galeria-grid">

                        {fotos.map((foto, index) => (

                            <button
                                className={`galeria-item galeria-item-${foto.numero}`}
                                key={foto.numero}
                                type="button"
                                onClick={() => abrirFoto(index)}
                                aria-label={`Abrir registro musical ${foto.numero}`}
                            >

                                <img
                                    src={foto.imagem}
                                    alt={`Registro musical ${foto.numero}`}
                                />

                            </button>

                        ))}

                    </div>

                </section>

            </main>


            {/* =========================
                LIGHTBOX
            ========================= */}

            {fotoAberta !== null && (

                <div
                    className="galeria-lightbox"
                    onClick={fecharFoto}
                >

                    <button
                        className="galeria-lightbox-close"
                        type="button"
                        onClick={fecharFoto}
                        aria-label="Fechar imagem"
                    >
                        ×
                    </button>


                    <button
                        className="galeria-lightbox-prev"
                        type="button"
                        onClick={(event) => {
                            event.stopPropagation();
                            fotoAnterior();
                        }}
                        aria-label="Imagem anterior"
                    >
                        ‹
                    </button>


                    <img
                        className="galeria-lightbox-image"
                        src={fotos[fotoAberta].imagem}
                        alt={`Registro musical ${fotos[fotoAberta].numero}`}
                        onClick={(event) => event.stopPropagation()}
                    />


                    <button
                        className="galeria-lightbox-next"
                        type="button"
                        onClick={(event) => {
                            event.stopPropagation();
                            proximaFoto();
                        }}
                        aria-label="Próxima imagem"
                    >
                        ›
                    </button>

                </div>

            )}


            <Footer />

        </>
    );
}

export default Galeria;