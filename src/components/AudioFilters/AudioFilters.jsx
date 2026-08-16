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

function AudioFilters({ activeFilter, onFilterChange }) {
  return (
    <div className="audio-filters">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`audio-filter ${
            activeFilter === filter ? "active" : ""
          }`}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default AudioFilters;