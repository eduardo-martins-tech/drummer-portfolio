import "./Highlights.css";
import ChapterCard from "../ChapterCard/ChapterCard";
import ChapterDivider from "../ChapterDivider/ChapterDivider";

import discoOuro from "../../assets/images/disco-ouro.png";
import michaelSullivan from "../../assets/images/michael-sullivan.png";
import supernovaVida from "../../assets/images/supernovavida.png";

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
      

      <ChapterDivider />

        <ChapterCard
          image={supernovaVida}
          imagePosition="left"
          title="Supernova Vida"
          text="Supernovavida foi um dos projetos mais marcantes da sua trajetória, reunindo anos de dedicação, composições, gravações e apresentações. Um período que contribuiu significativamente para sua formação musical e artística."
        />
      </section>
    </>
  );
}

export default Highlights;