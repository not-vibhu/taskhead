import "./Styles/Filters.css";
import { useFilter } from "../Contexts/FilterContext";

export default function Filters() {
  const { filter, setFilter } = useFilter();

  const filterList = ["All", "Low", "Medium", "High"];

  return (
    <div className="filter-div">
      <div>
        <p className="filter-text">Filter by priority: </p>
      </div>

      <div className="filter-pill-div">
        {filterList.map((filterItem) => (
          <div
            className={`filter-pill ${
              filter === filterItem ? "active-filter" : null
            }`}
            onClick={() => setFilter(filterItem)}
            key={filterItem}
          >
            <p>{filterItem}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
