import "./ChapterCard.css";

function ChapterCard({
  image,
  alt,
  title,
  text,
  imagePosition = "left",
}) {
  return (
    <section className={`chapter-card ${imagePosition}`}>
      <div className="chapter-image">
        {image && <img src={image} alt={alt} />}
      </div>

      <div className="chapter-content">
        {title && <h3>{title}</h3>}
        <p>{text}</p>
      </div>
    </section>
  );
}

export default ChapterCard;