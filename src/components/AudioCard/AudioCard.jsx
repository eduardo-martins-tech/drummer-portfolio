import "./AudioCard.css";

function AudioCard({ audio, onPlay }) {
  return (
    <article className="audio-card">

      <div className="audio-card-cover">
        {audio.cover ? (
          <img
            src={audio.cover}
            alt={`Capa de ${audio.title}`}
          />
        ) : (
          <div className="audio-card-cover-placeholder">
            🥁
          </div>
        )}
      </div>

      <div className="audio-card-info">

        <span className="audio-card-year">
          {audio.year}
        </span>

        <h2>{audio.title}</h2>

        <p>{audio.artist}</p>

        <div className="audio-card-progress">
          <span></span>
        </div>

        <div className="audio-card-meta">
          <span>00:00</span>
          <span>00:30</span>
        </div>

        <button
          type="button"
          className="audio-card-play"
          onClick={() => onPlay(audio)}
        >
          ▶
          <span>OUVIR TRECHO</span>
        </button>

        <a
          href={audio.spotifyUrl}
          className="audio-card-spotify"
          target="_blank"
          rel="noreferrer"
        >
          Spotify · OUVIR COMPLETO ↗
        </a>

      </div>

    </article>
  );
}

export default AudioCard;