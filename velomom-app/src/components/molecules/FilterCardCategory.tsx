// src/components/molecules/FilterCardCategory.tsx
import Button from "../atoms/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

interface FilterCardCategoryProps {
  onSelectFilter: (filterCode: number | null) => void;
  selectedFilter: number | null;
}

const FilterCardCategory = ({ onSelectFilter, selectedFilter }: FilterCardCategoryProps) => {
  const categories = [
    { code: 1, name: "Baby Blues" },
    { code: 2, name: "Self-care" },
    { code: 3, name: "Kesehatan Mental" },
    { code: 4, name: "Journaling" },
    { code: 5, name: "Dukungan Emosional" },
    { code: 6, name: "Keseharian" },
    { code: 7, name: "Tips Relaksasi" },
    { code: 8, name: "Parenting" },
  ];

  const handleClick = (code: number) => {
    if (selectedFilter === code) {
      // Toggle: jika klik lagi kategori yang sama, hilangkan filter
      onSelectFilter(null);
    } else {
      onSelectFilter(code);
    }
  };

  return (
    <div className="flex justify-between px-3 gap-5">
      <div className="flex gap-3 flex-wrap">
        {categories.map((category) => (
          <Button
            key={category.code}
            buttonType="button"
            onClick={() => handleClick(category.code)}
            classname={`border-[1px] ${
              selectedFilter === category.code
                ? "bg-purple500 text-white"
                : "text-purple500 hover:bg-purple500 hover:text-white"
            } border-purple500 rounded-[18px] py-1 px-4 font-light text-sm transition-all duration-200`}
          >
            {category.name}
          </Button>
        ))}
      </div>
      <div>
        <Button
          buttonType="button"
          onClick={() => onSelectFilter(null)} // Tombol reset filter
          classname="rounded-[18px] px-3 py-1 bg-purple500 hover:bg-purple800 text-white"
        >
          <FontAwesomeIcon icon={faFilter} className="text-base" />
        </Button>
      </div>
    </div>
  );
};

export default FilterCardCategory;
