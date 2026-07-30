import "./ChapterCard.css";

function ChapterCard({
  image,
  alt,
  text,
  imagePosition = "left",
}) {
  return (
    <section className={`chapter-card ${imagePosition}`}>
      <div className="chapter-image">
        {image && <img src={image} alt={alt} />}
      </div>

      <div className="chapter-content">
        <p>{text}</p>
      </div>
    </section>
  );
}

export default ChapterCard;