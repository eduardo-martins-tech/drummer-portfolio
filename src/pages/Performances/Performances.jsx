import Navbar from "../../components/Navbar/Navbar";
import PerformanceHero from "../../components/PerformanceHero/PerformanceHero";
import PerformanceSection from "../../components/PerformanceSection/PerformanceSection";
import Footer from "../../components/Footer/Footer";

function Performances() {
    return (
        <>
            <Navbar />

            <PerformanceHero />

            <PerformanceSection />

            <Footer />
        </>
    );
}

const performances = [
  {
    artist: "Hélio Borges",
    videos: [
      {
        title: "Ele é meu Pai",
        description:
          "Registro de uma performance ao lado de Hélio Borges.",
        youtubeId: "W-yuZtgdXxU",
      },
      {
        title: "Enche-me",
        description:
          'Clipe oficial da música "Enche-me" (Fill me up).',
        youtubeId: "7jXg6jti360",
      },
    ],
  },
];



export default Performances;