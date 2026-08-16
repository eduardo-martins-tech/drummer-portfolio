import "./Audios.css";

import { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import AudioHero from "../../components/AudioHero/AudioHero";
import AudioFilters from "../../components/AudioFilters/AudioFilters";
import AudioCard from "../../components/AudioCard/AudioCard";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import Footer from "../../components/Footer/Footer";

import audios from "../../data/audios";

function Audios() {
  const [currentAudio, setCurrentAudio] = useState(audios[0]);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [activeFilter, setActiveFilter] = useState("TODOS");

  function handlePlayAudio(audio) {
    setCurrentAudio(audio);
  }

  const mainArtists = [
    "DD JUNIOR",
    "LEX",
    "MARCELA TAÍS",
    "NÁDIA SANTOLLI",
    "SUPERNOVAVIDA",
    "HÉLIO BORGES",
  ];

  const filteredAudios =
    activeFilter === "TODOS"
      ? audios
      : activeFilter === "OUTROS"
        ? audios.filter(
            (audio) =>
              !mainArtists.includes(audio.artist.toUpperCase())
          )
        : audios.filter(
            (audio) =>
              audio.artist.toUpperCase() === activeFilter
          );

  return (
    <main className="audios-page">

      <Navbar />

      <AudioHero />

      <AudioFilters
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <section className="audios-grid">
        {filteredAudios.map((audio) => (
          <AudioCard
            key={audio.id}
            audio={audio}
            onPlay={() => handlePlayAudio(audio)}
            currentTime={
              currentAudio.id === audio.id
                ? currentTime
                : 0
            }
            duration={
              currentAudio.id === audio.id
                ? duration
                : 0
            }
          />
        ))}
      </section>

      <Footer />

      <AudioPlayer
        key={currentAudio.id}
        audio={currentAudio}
        onTimeUpdate={setCurrentTime}
        onDurationChange={setDuration}
      />

    </main>
  );
}

export default Audios;