import "./Highlights.css";
import ChapterCard from "../ChapterCard/ChapterCard";

import discoOuro from "../../assets/images/disco-ouro.png";
import michaelSullivan from "../../assets/images/michael-sullivan.png";

function Highlights() {
  return (
    <>
      <section className="highlights-dark">
        <ChapterCard
          image={discoOuro}
          alt="Entrega do Disco de Ouro no Programa Raul Gil"
          text='Recebendo disco de ouro pela gravação do DVD "Entra no Meu Lar", do Bispo Robson Rodovalho, durante participação no programa Raul Gil.'
        />
      </section>

      <section className="highlights-light">
        <ChapterCard
          image={michaelSullivan}
          alt="Eduardo Martins e Michael Sullivan"
          imagePosition="right"
          theme="light"
          text="Gravação do álbum ''Moderno à Moda Antiga'', de Marcela Taís, lançado pela Sony Music em 2015. O projeto foi coproduzido por Marcela Taís e Michael Sullivan, um dos maiores produtores da música brasileira, e contou com a participação de Eduardo Martins na bateria. "
        />
      </section>
    </>
  );
}

export default Highlights;