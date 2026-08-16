import "./AudioPlayer.css";

function AudioPlayer({ audio }) {
  return (
    <div className="audio-player">

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

      <div className="audio-player-controls">

        <button aria-label="Aleatório">
          ⤨
        </button>

        <button aria-label="Anterior">
          |◀
        </button>

        <button
          className="audio-player-play"
          aria-label="Reproduzir"
        >
          ▶
        </button>

        <button aria-label="Próxima">
          ▶|
        </button>

        <button aria-label="Repetir">
          ↻
        </button>

      </div>

      <div className="audio-player-progress">

        <span>00:00</span>

        <div className="audio-player-progress-bar">
          <span></span>
        </div>

        <span>00:30</span>

      </div>

      <div className="audio-player-volume">

        <span>🔊</span>

        <div className="audio-player-volume-bar">
          <span></span>
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