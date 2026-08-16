import "./AudioFilters.css";

const filters = [
  "TODOS",
  "DD JUNIOR",
  "LEX",
  "MARCELA TAÍS",
  "NÁDIA SANTOLLI",
  "SUPERNOVAVIDA",
  "HÉLIO BORGES",
  "OUTROS",
];

function AudioFilters() {
  return (
    <section className="audio-filters">
      <div className="audio-filters-inner">
        {filters.map((filter, index) => (
          <button
            key={filter}
            className={`audio-filter ${
              index === 0 ? "active" : ""
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </section>
  );
}

export default AudioFilters;