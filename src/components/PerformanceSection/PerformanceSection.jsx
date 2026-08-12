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
                  className={`performance-video performance-video-${videoIndex + 1}`}
                  key={video.youtubeId}
                >
                  <h3>{video.title}</h3>

                  <a
                    href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="performance-video-link"
                  >
                    <div className="performance-video-thumbnail">

                      <img
                        src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                        alt={video.title}
                      />

                      <div className="performance-play">
                        ▶
                      </div>

                    </div>
                  </a>
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