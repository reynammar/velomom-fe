// src/components/molecules/SearchBar.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState, FormEvent } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full py-3 pl-11 pr-3 rounded-xl text-sm font-light text-[16px] shadow-md shadow-gray-300/50"
        placeholder="Pencarian"
        name="search"
      />
      <button type="submit" className="absolute left-4 top-3 text-gray-500">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-base text-purple500" />
      </button>
    </form>
  );
};

export default SearchBar;
