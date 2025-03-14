import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AddJournalButton = () => {
    return (
        <Link to="/tambah-journal">
            <div className="border-2 border-purple500 hover:border-white hover:bg-purple500 rounded-3xl flex justify-center py-8 group transition-all duration-300">
                <div className="flex items-center gap-6">
                    <div className="bg-purple500 group-hover:bg-white rounded-full w-12 h-12 flex items-center justify-center">
                        <FontAwesomeIcon icon={faPlus} className="text-2xl text-white group-hover:text-purple500" />
                    </div>
                    <h3 className="font-semibold text-[38px] text-purple500 group-hover:text-white">Buat Jurnal</h3>
                </div>
            </div>
        </Link>
    );
};

export default AddJournalButton;