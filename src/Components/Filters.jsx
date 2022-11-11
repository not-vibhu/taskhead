import "./Styles/Filters.css";
import { useFilter } from "../Contexts/FilterContext";

export default function Filters() {

    const { filter, setFilter } = useFilter();

    const filterList = ["All", "Low", "Medium", "High"];

    return (
        <div className="filter-div">
            <p>Filters</p>

            <div>

                {filterList.map((filterItem) => <div className={`filter-pill`} onClick={() => setFilter(filterItem)}>
                    {filterItem}
                </div>
                )}

            </div>
        </div>
    )
}
