// src/components/organisms/VeloGuide.tsx
import SearchBar from "../../molecules/SearchBar";
import Filter from "../../molecules/FilterCardCategory";
import GuideCard from "../../molecules/GuideCard";
import VideoCard from "../../molecules/VideoCard";

interface VeloGuideProps {
    titlePage: string;
    title: string;
    isVideoPage: boolean;
    date: string;
    description: string;
    imageUrl: string;
}

const VeloGuide = ({ title, titlePage, isVideoPage, date, description, imageUrl }: VeloGuideProps) => {
    return (
        <div className="px-[70px] overflow-hidden pt-[134px] pb-24 flex flex-col gap-10 w-full">
            {/* Header page */}
            <div className="flex flex-col gap-7 items-center mx-auto w-[50%]">
                <h1 className="font-bold text-6xl text-third">{titlePage}</h1>
                
                <SearchBar />
            </div>

            {/* Search Bar */}

            {/* Filter */}
            <div className="flex flex-col gap-7">
                <hr className="border-[1.5px] border-pinkprimary" />
                <Filter />
            </div>

            {/* Cards */}
            <div className="grid grid-cols-3 gap-11">
                {isVideoPage ? (
                    <VideoCard image={imageUrl} title={title} description={description} />
                ) : (
                    <GuideCard image={imageUrl} title={title} date={date} description={description} />
                )}
            </div>
        </div>
    );
};

export default VeloGuide;