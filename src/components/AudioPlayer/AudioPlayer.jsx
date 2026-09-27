import { useEffect, useRef, useState } from "react";
import "./AudioPlayer.css";

function AudioPlayer({
  audio,
  onTimeUpdate,
  onDurationChange,
  playRequestId,
}) {
  const audioRef = useRef(null);
  const previousVolumeRef = useRef(1);

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

  // Toca automaticamente quando o usuário clica em "OUVIR TRECHO"
  // em algum card (mesmo que seja a faixa já carregada no player)
  useEffect(() => {
    const audioElement = audioRef.current;

    if (!audioElement || !audioSrc || !playRequestId) return;

    const startPlayback = () => {
      audioElement
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // O navegador pode bloquear o autoplay em alguns casos;
          // nesse caso o usuário ainda pode dar play manualmente.
        });
    };

    if (audioElement.readyState >= 2) {
      startPlayback();
    } else {
      audioElement.addEventListener("canplay", startPlayback, {
        once: true,
      });

      return () =>
        audioElement.removeEventListener("canplay", startPlayback);
    }
  }, [playRequestId, audioSrc]);

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

  // Avança ou volta 10 segundos na faixa atual
  const handleSkip = (seconds) => {
    const audioElement = audioRef.current;

    if (!audioElement || !audioSrc) return;

    // Usa a duração real do elemento de áudio (não o estado do React),
    // que pode ainda estar zerado logo após trocar de faixa.
    const audioDuration = audioElement.duration;
    const maxTime = Number.isFinite(audioDuration)
      ? audioDuration
      : Infinity;

    const newTime = Math.min(
      Math.max(audioElement.currentTime + seconds, 0),
      maxTime
    );

    audioElement.currentTime = newTime;
    setCurrentTime(newTime);
    onTimeUpdate?.(newTime);
  };

  // Seek (clique e também arrastar, com mouse ou touch)
  const seekFromEvent = (event) => {
    const audioElement = audioRef.current;

    if (!audioElement) return;

    const audioDuration = audioElement.duration;

    if (!Number.isFinite(audioDuration) || audioDuration === 0) return;

    const rect = event.currentTarget.getBoundingClientRect();

    const clickPosition = event.clientX - rect.left;

    const percentage = Math.min(
      Math.max(clickPosition / rect.width, 0),
      1
    );

    const newTime = percentage * audioDuration;

    audioElement.currentTime = newTime;
    setCurrentTime(newTime);
    onTimeUpdate?.(newTime);
  };

  const handleSeekStart = (event) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    seekFromEvent(event);
  };

  const handleSeekMove = (event) => {
    // Só arrasta enquanto o botão/dedo estiver pressionado
    if (event.buttons === 0 && event.pointerType !== "touch") return;

    seekFromEvent(event);
  };

  const handleSeekEnd = (event) => {
    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  // Volume (clique e também arrastar)
  const volumeFromEvent = (event) => {
    const audioElement = audioRef.current;

    if (!audioElement) return;

    const rect = event.currentTarget.getBoundingClientRect();

    const clickPosition = event.clientX - rect.left;

    const newVolume = Math.min(
      Math.max(clickPosition / rect.width, 0),
      1
    );

    audioElement.volume = newVolume;

    setVolume(newVolume);
  };

  const handleVolumeStart = (event) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    volumeFromEvent(event);
  };

  const handleVolumeMove = (event) => {
    if (event.buttons === 0 && event.pointerType !== "touch") return;

    volumeFromEvent(event);
  };

  const handleVolumeEnd = (event) => {
    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  // Mudo (clicando no ícone do alto-falante)
  const handleToggleMute = () => {
    const audioElement = audioRef.current;

    if (!audioElement) return;

    if (volume > 0) {
      // Guarda o volume atual pra restaurar depois e zera o som
      previousVolumeRef.current = volume;
      audioElement.volume = 0;
      setVolume(0);
    } else {
      const restoredVolume = previousVolumeRef.current || 1;

      audioElement.volume = restoredVolume;
      setVolume(restoredVolume);
    }
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

        <button
          className="audio-player-skip"
          aria-label="Voltar 10 segundos"
          title="Voltar 10s"
          onClick={() => handleSkip(-10)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <polygon points="11 6 3 12 11 18" fill="currentColor" />
            <polygon points="21 6 13 12 21 18" fill="currentColor" />
          </svg>
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

        <button
          className="audio-player-skip"
          aria-label="Avançar 10 segundos"
          title="Avançar 10s"
          onClick={() => handleSkip(10)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <polygon points="13 6 21 12 13 18" fill="currentColor" />
            <polygon points="3 6 11 12 3 18" fill="currentColor" />
          </svg>
        </button>

        
      </div>

      {/* PROGRESSO */}

      <div className="audio-player-progress">

        <span>
          {formatTime(currentTime)}
        </span>

        <div
          className="audio-player-progress-bar"
          onPointerDown={handleSeekStart}
          onPointerMove={handleSeekMove}
          onPointerUp={handleSeekEnd}
          onPointerCancel={handleSeekEnd}
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

        <button
          type="button"
          className="audio-player-mute"
          aria-label={volume === 0 ? "Ativar som" : "Mudo"}
          title={volume === 0 ? "Ativar som" : "Mudo"}
          onClick={handleToggleMute}
        >
          {volume === 0 ? (
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon
                points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"
                fill="currentColor"
                stroke="none"
              />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon
                points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"
                fill="currentColor"
                stroke="none"
              />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
          )}
        </button>

        <div
          className="audio-player-volume-bar"
          onPointerDown={handleVolumeStart}
          onPointerMove={handleVolumeMove}
          onPointerUp={handleVolumeEnd}
          onPointerCancel={handleVolumeEnd}
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