import "./Highlights.css";
import ChapterCard from "../ChapterCard/ChapterCard";

import discoOuro from "../../assets/images/disco-ouro.png";

function Highlights() {
  return (
    <section className="highlights">
      <ChapterCard
        image={discoOuro}
        alt="Entrega do Disco de Ouro no Programa Raul Gil"
        text="Recebendo disco de ouro pela gravação do Dvd '' Entra no meu Lar '' , do Bispo Robson Rodovalho, durante participação no programa Raul Gil."
      />
    </section>
  );
}

export default Highlights;