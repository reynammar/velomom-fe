
interface ArticleContentProps {
    content: string;
}

const ArticleContent = ({content}: ArticleContentProps) => {
  return (
    <div className="flex flex-1 gap-8 flex-col mt-24">
      <div className="flex flex-col gap-8 font-light text-beforeXl leading-text1 tracking-text1 text-purple900 text-justify">
        {content}
      </div>
    </div>
  );
};

export default ArticleContent;
