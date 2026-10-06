import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./Bio.css";

import fotoBio from "../../assets/images/bio-dourada.jpg";
import fotoBioPretoBranco from "../../assets/images/bio-imagem-04.jpg";

function Bio() {
    return (
        <>
            <Navbar />

            <main className="bio">

                {/* =========================
                   HERO
                ========================= */}

                <section className="bio-hero">

                    <div className="bio-hero-image">

                        <img
                            src={fotoBio}
                            alt="Eduardo Martins tocando bateria"
                        />

                    </div>

                    <div className="bio-hero-overlay"></div>

                    <div className="bio-hero-content">

                        <h1>BIO</h1>

                    </div>

                </section>


                {/* =========================
                   PRIMEIRA PARTE DA BIO
                ========================= */}

                <section className="bio-content">

                    <div className="bio-text">

                        <p>
                            Eduardo Martins nasceu em 4 de julho de 1979, em Brasília.
                            Seu contato com a música começou aos 16 anos. Antes de
                            encontrar na bateria seu principal instrumento, teve uma
                            breve passagem pelo contrabaixo e pelo teclado.
                        </p>

                        <p>
                            Sua formação musical começou com a orientação de alguns
                            professores, que apresentaram suas primeiras bases. O
                            verdadeiro amadurecimento e desenvolvimento musical,
                            porém, aconteceram no estudo individual: decifrando CDs,
                            passando horas na bateria e buscando respostas por conta
                            própria.
                        </p>

                        <p>
                            Logo estava participando das ministrações na igreja,
                            experiência que considera uma de suas melhores escolas
                            práticas para o desenvolvimento musical. Foi nesse
                            ambiente que aprofundou sua experiência com a música e
                            com a bateria dentro de diferentes contextos de
                            performance.
                        </p>

                    </div>


                    {/* =========================
                       SEGUNDA PARTE
                    ========================= */}

                    <section className="bio-story">

                        <div className="bio-story-text">

                            {/* FOTO */}

                            <div className="bio-story-image">

                                <img
                                    src={fotoBioPretoBranco}
                                    alt="Eduardo Martins em registro de sua trajetória musical"
                                />

                            </div>


                            {/* PRIMEIRO PARÁGRAFO */}

                            <p>
                                Aos 18 anos, recebeu seu primeiro convite para atuar de
                                forma profissional, acompanhando a artista Ludmila
                                Ferber, já reconhecida no cenário gospel.
                            </p>


                            {/* SEGUNDO PARÁGRAFO */}

                            <p>
                                Em 2002, realizou sua primeira gravação profissional com
                                a banda Supernovavida, da qual fez parte. A experiência
                                representou uma virada de chave na maneira de enxergar
                                seu instrumento dentro da música, especialmente pela
                                concepção musical apresentada na época pelo produtor
                                Riba Ribeiro.
                            </p>


                            {/* TERCEIRO PARÁGRAFO */}

                            <p>
                                A partir daí, passou a atuar de forma cada vez mais
                                presente em produções do produtor Pingo, realizando
                                diversas gravações para artistas do cenário gospel,
                                entre eles Marcela Taís, Lex Skate Rock, Nádia Santólli,
                                DD Júnior, Hélio Borges e Bispo Robson Rodovalho, entre
                                outros.
                            </p>


                            {/* QUARTO PARÁGRAFO */}

                            <p>
                                Também acompanhou artistas como Cris Duran, Kléber Lucas,
                                Priscila Alcântara, Baby do Brasil e Bispo Robson
                                Rodovalho. Teve participação ainda em gravações de
                                diversos DVDs ao vivo e em uma música que integrou a
                                trilha sonora de <em>Malhação</em>, da TV Globo.
                            </p>


                            {/* ÚLTIMO PARÁGRAFO */}

                            <p>
                                Ao longo dessa trajetória, a música permaneceu como algo
                                forte e presente em sua vida. Mais do que uma profissão,
                                é uma de suas maiores paixões e uma fonte de realização.
                            </p>

                        </div>

                    </section>

                </section>

            </main>

            <Footer />

        </>
    );
}

export default Bio;