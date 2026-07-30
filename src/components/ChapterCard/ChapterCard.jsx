import "./ChapterCard.css";

function ChapterCard({
  image,
  alt,
  text,
  imagePosition = "left",
  imageClass = "",
}) {
  return (
    <section className={`chapter-card ${imagePosition}`}>
      <div className={`chapter-image ${imageClass}`}>
        {image && <img src={image} alt={alt} />}
      </div>

      <div className="chapter-content">
        <p>{text}</p>
      </div>
    </section>
  );
}

export default ChapterCard;