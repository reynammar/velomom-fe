import { Link } from 'react-router-dom';

interface RelatedArticles {
    title: string;
}

const RelatedArticles = ({title}: RelatedArticles) => {
  return (
    <div className="w-1/3 flex flex-col gap-4 mt-24">
      <h6 className="font-semibold text-xl text-purple900 leading-text1 tracking-text1">
        Artikel Terbaru
      </h6>
      <div className="flex flex-col gap-5">
        <Link to="">{title}</Link>
        <hr className="border-[1px] border-purple100" />
      </div>
    </div>
  );
};

export default RelatedArticles;
