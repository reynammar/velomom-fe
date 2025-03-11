const JournalHeader = () => {
    return (
        <div className="bg-gradient-to-b from-custom1 via-custom2 to-custom3 pb-10 pt-[108px] rounded-3xl relative overflow-hidden">
            <div className="w-[1442px] h-[900px] rounded-t-full bg-radial from-[#613E8F1A] to-[#ac9dc01a] absolute -left-30 top-10 inset-shadow-sm inset-shadow-white/30 shadow-xl"></div>
            <div className="px-[250px] text-center text-purple700 flex flex-col gap-4 mt-10">
                <h1 className="font-semibold text-6xl leading-15">Ekspresikan Perasaan dengan Journaling</h1>
                <h6 className="font-medium text-xl">Catat perasaan harian untuk mengenali dan mengelola emosimu</h6>
            </div>
        </div>
    );
};

export default JournalHeader;