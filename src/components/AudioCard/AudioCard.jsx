import "./AudioCard.css";

function AudioCard({
  audio,
  onPlay,
  currentTime,
  duration,
}) {

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
          <span
            style={{
              width: `${progressPercentage}%`,
            }}
          ></span>
        </div>

        <div className="audio-card-meta">
          <span>{formatTime(currentTime)}</span>
          <span>-{formatTime(duration - currentTime)}</span>
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