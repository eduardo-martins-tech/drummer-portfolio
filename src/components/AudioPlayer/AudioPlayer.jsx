import { useEffect, useRef, useState } from "react";
import "./AudioPlayer.css";

function AudioPlayer({
  audio,
  onTimeUpdate,
  onDurationChange,
}) {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  const audioSrc = audio?.preview
    ? `${import.meta.env.BASE_URL}${audio.preview}`
    : undefined;

  // Troca de faixa
  useEffect(() => {
    const audioElement = audioRef.current;

    if (!audioElement) return;

    audioElement.pause();
    audioElement.currentTime = 0;

    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    onTimeUpdate?.(0);
    onDurationChange?.(0);

    if (audioSrc) {
      audioElement.load();
    }
  }, [audioSrc]);

  // Eventos do áudio
  useEffect(() => {
    const audioElement = audioRef.current;

    if (!audioElement) return;

    const handleLoadedMetadata = () => {
      const newDuration = audioElement.duration;

      setDuration(newDuration);
      onDurationChange?.(newDuration);
    };

    const handleTimeUpdate = () => {
      const newCurrentTime = audioElement.currentTime;

      setCurrentTime(newCurrentTime);
      onTimeUpdate?.(newCurrentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
      setDuration(0);

      onTimeUpdate?.(0);
      onDurationChange?.(0);
    };

    audioElement.addEventListener(
  "loadedmetadata",
  handleLoadedMetadata
);

audioElement.addEventListener(
  "timeupdate",
  handleTimeUpdate
);

audioElement.addEventListener(
  "ended",
  handleEnded
);

    return () => {
      audioElement.removeEventListener(
        "loadedmetadata",
        handleLoadedMetadata
      );

      audioElement.removeEventListener(
        "timeupdate",
        handleTimeUpdate
      );

      audioElement.removeEventListener(
        "ended",
        handleEnded
      );
    };
    }, [onTimeUpdate, onDurationChange]);

  // Play / Pause
  const handlePlayPause = () => {
    const audioElement = audioRef.current;

    if (!audioElement || !audioSrc) return;

    if (isPlaying) {
      audioElement.pause();
      setIsPlaying(false);
    } else {
      audioElement.play();
      setIsPlaying(true);
    }
  };

  // Seek
  const handleSeek = (event) => {
    const audioElement = audioRef.current;

    if (!audioElement || !duration) return;

    const rect =
      event.currentTarget.getBoundingClientRect();

    const clickPosition =
      event.clientX - rect.left;

    const percentage =
      clickPosition / rect.width;

    audioElement.currentTime =
      percentage * duration;

    setCurrentTime(audioElement.currentTime);
  };

  // Volume
  const handleVolume = (event) => {
    const audioElement = audioRef.current;

    if (!audioElement) return;

    const rect =
      event.currentTarget.getBoundingClientRect();

    const clickPosition =
      event.clientX - rect.left;

    const newVolume = Math.min(
      Math.max(
        clickPosition / rect.width,
        0
      ),
      1
    );

    audioElement.volume = newVolume;

    setVolume(newVolume);
  };

  // Formata segundos para MM:SS
  const formatTime = (time) => {
    if (!Number.isFinite(time)) {
      return "00:00";
    }

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
  };

  const progressPercentage =
    duration > 0
      ? (currentTime / duration) * 100
      : 0;

  return (
    <div className="audio-player">

      <audio
        ref={audioRef}
        src={audioSrc}
      />

      {/* INFORMAÇÕES DA FAIXA */}

      <div className="audio-player-track">

        <div className="audio-player-cover">
          <img
            src={audio.cover}
            alt={audio.title}
          />
        </div>

        <div className="audio-player-info">
          <strong>{audio.title}</strong>

          <span>
            {audio.artist} · {audio.year}
          </span>
        </div>

      </div>

      {/* CONTROLES */}

      <div className="audio-player-controls">

        <button aria-label="Aleatório">
          ⤨
        </button>

        <button aria-label="Anterior">
          |◀
        </button>

        <button
          className="audio-player-play"
          aria-label={
            isPlaying
              ? "Pausar"
              : "Reproduzir"
          }
          onClick={handlePlayPause}
        >
          {isPlaying ? "Ⅱ" : "▶"}
        </button>

        <button aria-label="Próxima">
          ▶|
        </button>

        <button aria-label="Repetir">
          ↻
        </button>

      </div>

      {/* PROGRESSO */}

      <div className="audio-player-progress">

        <span>
          {formatTime(currentTime)}
        </span>

        <div
          className="audio-player-progress-bar"
          onClick={handleSeek}
        >
          <span
            style={{
              width: `${progressPercentage}%`,
            }}
          ></span>
        </div>

        <span>
          -{formatTime(duration - currentTime)}
        </span>

      </div>

      {/* VOLUME */}

      <div className="audio-player-volume">

        <span>🔊</span>

        <div
          className="audio-player-volume-bar"
          onClick={handleVolume}
        >
          <span
            style={{
              width: `${volume * 100}%`,
            }}
          ></span>
        </div>

      </div>

      <button
        className="audio-player-menu"
        aria-label="Playlist"
      >
        ☰
      </button>

    </div>
  );
}

export default AudioPlayer;