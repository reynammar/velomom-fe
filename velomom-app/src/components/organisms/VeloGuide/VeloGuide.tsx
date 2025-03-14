// src/components/organisms/VeloGuide.tsx
import { useEffect, useState } from "react";
import SearchBar from "../../molecules/SearchBar";
import Filter from "../../molecules/FilterCardCategory";
import GuideCard from "../../molecules/GuideCard";
import VideoCard from "../../molecules/VideoCard";
import { getAllArticles } from "../../../api/services/articles";
import { getAllVideos } from "../../../api/services/video";

interface JournalItem {
  id: string;
  title: string;
  summary: string;
  createdAt: string;
  imageURL: string;
  thumbnail: string;
  description: string;
  filter: number;
}

interface VeloGuideProps {
  titlePage: string;
  isVideoPage?: boolean;
}

const VeloGuide = ({ titlePage, isVideoPage = false }: VeloGuideProps) => {
  const [journals, setJournals] = useState<JournalItem[]>([]);
  const [filteredJournals, setFilteredJournals] = useState<JournalItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [selectedFilter, setSelectedFilter] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = isVideoPage ? await getAllVideos() : await getAllArticles();
        setJournals(data);
        setFilteredJournals(data);
      } catch (err: any) {
        console.error("Fetch error:", err);
        setError("Gagal memuat data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [isVideoPage]);

  useEffect(() => {
    let filtered = journals;

    if (selectedFilter !== null) {
      filtered = filtered.filter((item) => item.filter === selectedFilter);
    }

    if (searchQuery.trim() !== "") {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredJournals(filtered);
  }, [journals, selectedFilter, searchQuery]);

  const handleFilterSelect = (filterCode: number | null) => {
    setSelectedFilter(filterCode);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="px-[70px] overflow-hidden pt-[134px] pb-24 flex flex-col gap-10 w-full">
      <div className="flex flex-col gap-7 items-center mx-auto w-[50%]">
        <h1 className="font-bold text-6xl text-purple700">{titlePage}</h1>
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="flex flex-col gap-7">
        <hr className="border-[1.5px] border-purple100" />
        <Filter onSelectFilter={handleFilterSelect} selectedFilter={selectedFilter} />
      </div>

      <div className="grid grid-cols-3 gap-11">
        {loading ? (
          <p className="col-span-3 text-center text-lg">Memuat data...</p>
        ) : error ? (
          <p className="col-span-3 text-center text-red-500">{error}</p>
        ) : filteredJournals.length === 0 ? (
          <p className="col-span-3 text-center">Tidak ada hasil ditemukan.</p>
        ) : (
          filteredJournals.map((item) =>
            isVideoPage ? (
              <VideoCard
                key={item.id}
                title={item.title}
                description={item.description}
                thumbnail={item.thumbnail}
              />
            ) : (
              <GuideCard
                key={item.id}
                title={item.title}
                createdAt={item.createdAt}
                imageURL={item.imageURL}
                summary={item.summary}
              />
            )
          )
        )}
      </div>
    </div>
  );
};

export default VeloGuide;
