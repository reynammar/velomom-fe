import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
    return (
        <div className="relative w-full">
            <input
                type="text"
                className="w-full py-3 pl-11 pr-3 rounded-xl text-sm font-light text-[16px] shadow-md shadow-gray-300/50"
                placeholder="Pencarian"
                name="search"
            />
            <button type="submit" className="absolute left-4 top-3 text-gray-500">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-base text-purple500" />
            </button>
        </div>
    );
};

export default SearchBar;