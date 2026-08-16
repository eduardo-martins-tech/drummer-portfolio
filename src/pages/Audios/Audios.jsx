import "./Audios.css";

import { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import AudioHero from "../../components/AudioHero/AudioHero";
import AudioFilters from "../../components/AudioFilters/AudioFilters";
import AudioCard from "../../components/AudioCard/AudioCard";
import Footer from "../../components/Footer/Footer";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import audios from "../../data/audios";

function Audios() {
  const [currentAudio, setCurrentAudio] = useState(audios[0]);

  function handlePlayAudio(audio) {
    setCurrentAudio(audio);
  }

  return (
    <main className="audios-page">

      <Navbar />

      <AudioHero />

      <AudioFilters />

      <section className="audios-grid">

        {audios.map((audio) => (
          <AudioCard
            key={audio.id}
            audio={audio}
            onPlay={handlePlayAudio}
          />
        ))}

      </section>

      <Footer />

<AudioPlayer
  key={currentAudio.id}
  audio={currentAudio}
/>

      <AudioPlayer
        key={currentAudio.id}
        audio={currentAudio}
      />

    </main>
  );
}

export default Audios;