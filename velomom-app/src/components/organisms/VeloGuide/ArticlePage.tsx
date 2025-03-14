import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import HeroArticle from "../../organisms/VeloGuide/HeroArticle";
import ArticleContent from "../../organisms/VeloGuide/ArticleContent";
import FeaturedImage from "../../organisms/VeloGuide/FeatureImages";
import RelatedArticles from "../../organisms/VeloGuide/RelatedArticles";
import { getArticleById, getArticles } from "../../../api/services/articles";

interface Article {
  id: string;
  imageURL: string;
  createdAt: string;
  title: string;
  summary: string;
  content: string;
}

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        if (id) {
          const articleData = await getArticleById(id);
          setArticle(articleData);

          const allArticles = await getArticles();
          const filtered = allArticles.filter((item: Article) => item.id !== id);
          const selected = filtered.slice(0, 3);
          setRelatedArticles(selected);
        }
      } catch (err) {
        console.error(err);
        setError("Gagal memuat artikel.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticleData();
  }, [id]);

  if (loading) {
    return <div className="text-center py-10 text-purple700">Memuat artikel...</div>;
  }

  if (error || !article) {
    return <div className="text-center py-10 text-red-500">{error || "Artikel tidak ditemukan."}</div>;
  }

  return (
    <div className="overflow-hidden pt-20 pb-20 flex w-full flex-wrap">
      <HeroArticle
        imageURL={article.imageURL}
        title={article.title}
        summary={article.summary}
        createdAt={article.createdAt}
      />
      <div className="flex w-full px-primaryPad">
        <div className="flex flex-1 flex-col">
          <ArticleContent content={article.content} />
          <FeaturedImage imageURL={article.imageURL} />
          <ArticleContent content={article.content} />
        </div>
        <div className="hidden md:block w-0.5 bg-purple100 ml-20 mr-6"></div>
        <div className="w-full md:w-[30%] mt-10 md:mt-0">
          <h3 className="text-xl font-bold mb-4 text-purple700">Artikel Lainnya</h3>
          <div className="flex flex-col gap-4">
            {relatedArticles.length > 0 ? (
              relatedArticles.map((item) => (
                <div key={item.id}>
                  <RelatedArticles
                    title={item.title}
                  />
                </div>
              ))
            ) : (
              <p className="text-gray-500">Tidak ada artikel lain.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
