import "./PerformanceSection.css";
import performances from "../../data/performances";

function PerformanceSection() {
  return (
    <section className="performance-section">
      {performances.map((performance, index) => (
        <div key={performance.artist}>

          {index > 0 && <div className="performance-divider"></div>}

          <div className="performance-chapter">

            <h2>{performance.artist}</h2>

            <div className="performance-videos">
              {performance.videos.map((video, videoIndex) => (
                <article
  className="performance-video"
  key={video.youtubeId}
>
  <h3>{video.title}</h3>

  <div className="performance-video-frame">
    <iframe
      src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0`}
      title={video.title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>
</article>
              ))}
            </div>

          </div>
        </div>
      ))}
    </section>
  );
}

export default PerformanceSection;