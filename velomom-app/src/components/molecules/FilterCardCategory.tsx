import Button from "../atoms/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const FilterCategory = () => {
    // Array kategori
    const categories = ["Baby Blues", "Postpartum Depression", "Anxiety", "Stress Management"];

    return (
        <div className="flex justify-between px-3 gap-5">
            <div className="flex gap-5 flex-wrap">
                {/* Mapping kategori untuk membuat tombol */}
                {categories.map((category, index) => (
                    <Button
                        key={index}
                        buttonType='button'
                        classname="border-[1px] border-primary hover:bg-primary hover:text-white rounded-[18px] py-1 px-4 font-light text-primary text-sm"
                    >
                        {category}
                    </Button>
                ))}
            </div>
            <div>
                <Button buttonType='submit' classname="rounded-[18px] px-3 py-1 bg-primary hover:bg-purplesecondary text-white">
                    <FontAwesomeIcon icon={faFilter} className="text-base" />
                </Button>
            </div>
        </div>
    );
};

export default FilterCategory;