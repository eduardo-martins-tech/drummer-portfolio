import Navbar from "../../components/Navbar/Navbar";
import "./Bio.css";

import fotoBio from "../../assets/images/bio-dourada.jpg";

function Bio() {
    return (
        <>
            <Navbar />

            <main className="bio">

                <section className="bio-hero">

                    <div className="bio-hero-image">
                        <img
                            src={fotoBio}
                            alt="Eduardo Martins tocando bateria"
                        />
                    </div>

                    <div className="bio-hero-overlay"></div>

                    <div className="bio-hero-content">


                        <h1>
                            BIO
                        </h1>


                    </div>

                </section>

            </main>
        </>
    );
}

export default Bio;
