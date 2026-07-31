import "./Highlights.css";
import ChapterCard from "../ChapterCard/ChapterCard";
import ChapterDivider from "../ChapterDivider/ChapterDivider";

import discoOuro from "../../assets/images/disco-ouro.png";
import michaelSullivan from "../../assets/images/michael-sullivan.png";
import supernovaVida from "../../assets/images/supernovavida.png";
import pingo from "../../assets/images/pingo.png";

function Highlights() {
  return (
    <>
      <section className="highlights-dark">
        <ChapterCard
          image={discoOuro}
          title="PROGRAMA RAUL GIL"
          alt="Entrega do Disco de Ouro no Programa Raul Gil"
          text='Recebendo disco de ouro pela gravação do DVD "Entra no Meu Lar", do Bispo Robson Rodovalho, durante participação no programa Raul Gil.'
        />
      </section>

      <section className="highlights-light">
        <ChapterCard
          image={michaelSullivan}
          alt="Eduardo Martins e Michael Sullivan"
          imagePosition="right"
          title="Produtor Michael Sullivan"
          theme="light"
          text="Gravação do álbum ''Moderno à Moda Antiga'', de Marcela Taís, lançado pela Sony Music em 2015. O projeto foi coproduzido por Marcela Taís e Michael Sullivan, um dos maiores produtores da música brasileira, e contou com a participação de Eduardo Martins na bateria. "
        />
      

      <ChapterDivider />

        <ChapterCard
          image={supernovaVida}
          imagePosition="left"
          title="Banda Supernovavida"
          text="Supernovavida foi um dos projetos mais marcantes da sua trajetória, reunindo anos de dedicação, composições, gravações e apresentações. Um período que contribuiu significativamente para sua formação musical e artística."
        />

        <ChapterDivider />

        <ChapterCard
        image={pingo}
        imagePosition="right"
        title="PRODUTOR JONATHAS PINGO"
        imageClass="chapter-image-collage"
        text="Ao lado do produtor ''Jonathas Pingo'', parceiro em diversos projetos e uma das grandes referências da produção musical brasileira. Uma amizade construída ao longo dos anos por meio da música, marcada pela confiança, pela troca de experiências e pela participação em importantes trabalhos."
  />       
      </section>
    </>
  );
}

export default Highlights;