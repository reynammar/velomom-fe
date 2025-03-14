import { useEffect, useState } from "react";
import Button from "../../atoms/Button";
import GuideCard from "../../molecules/GuideCard";
import VideoCard from "../../molecules/VideoCard";
import { getArticles } from "../../../api/services/articles";
import { getVideo } from "../../../api/services/video";
import { useNavigate } from "react-router-dom";

interface Article {
  id: number;
  imageURL: string;
  createdAt: string;
  title: string;
  summary: string;
}

interface Video {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
}


const ContentSection = () => {
  const navigate = useNavigate();  
  const [articles, setArticles] = useState<Article[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articlesData = await getArticles();
        const videosData = await getVideo();
        setArticles(articlesData);
        setVideos(videosData);
      } catch (err) {
        setError("Gagal memuat data. Coba refresh halaman.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-full text-center py-10 text-purple700 text-xl">
        Memuat konten...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full text-center py-10 text-red-500 text-lg">
        {error}
      </div>
    );
  }

  return (
    <section className="w-full flex flex-col items-center py-18 px-[70px] overflow-hidden gap-10">
      {/* Artikel */}
      <div className="w-full flex flex-col justify-center items-center gap-10">
        <div className="w-full flex items-center justify-between">
          <h2 className="w-[55%] font-semibold text-5xl text-purple700 leading-14">
            Artikel dari VeloGuide untukmu
          </h2>
          <Button
            classname="text-center rounded-2xl py-3 px-6 text-white w-[220px] h-12 bg-purple500 hover:bg-purple700"
            isRedirect={true}
            redirectTo="/article-page"
          >
            Selengkapnya
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-5 w-full">
        {articles.slice(0, 3).map((article) => (
            <div
            key={article.id}
            className="cursor-pointer"
            onClick={() => navigate(`/article/${article.id}`)}
            >
            <GuideCard
                title={article.title}
                createdAt={article.createdAt}
                summary={article.summary}
                imageURL={article.imageURL}
            />
            </div>
        ))}
        </div>

        <hr className="border-purple50 w-full border-1/2" />
      </div>

      {/* Video */}
      <div className="w-full flex flex-col justify-center items-center gap-10">
        <div className="w-full flex items-center justify-between">
          <h2 className="w-[55%] font-semibold text-5xl text-purple700 leading-14">
            Video dari VeloGuide untukmu
          </h2>
          <Button
            classname="text-center rounded-2xl py-3 px-6 text-white w-[220px] h-12 bg-purple500 hover:bg-purple700"
            isRedirect={true}
            redirectTo="/video-page"
          >
            Selengkapnya
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {videos.slice(0, 3).map((video) => (
            <VideoCard
              key={video.id}
              thumbnail={video.thumbnail}
              title={video.title}
              description={video.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
