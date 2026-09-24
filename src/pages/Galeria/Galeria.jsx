import Navbar from "../../components/Navbar/Navbar";
import "./Galeria.css";
import heroGaleria from "../../assets/images/hero-galeria.png";

function Galeria() {
    return (
        <>

            <Navbar />

            <main className="galeria">

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

            </main>
        </>
    );
}

export default Galeria;