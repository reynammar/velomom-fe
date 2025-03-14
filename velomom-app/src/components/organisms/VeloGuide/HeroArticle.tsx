
interface HeroArticleProps {
    imageURL: string;
    title: string;
    summary: string;
    createdAt: string;
}

const HeroArticle = ({imageURL, title, summary, createdAt}: HeroArticleProps) => {
  return (
    <div className="flex pr-[72px] w-full bg-gradient-to-b from-custom1 via-custom2 to-custom3 z-10 py-30 items-center relative">
      <div className="w-full relative mr-52"></div>
      <img
        src={imageURL}
        alt="artikel-image"
        className="absolute top-20 left-18 w-[34.5rem] h-[33.5rem] object-cover rounded-lg"
      />
      <div className="flex flex-col gap-7 justify-center">
        <div className="flex flex-col gap-3">
          <h2 className="font-semibold leading-text2 tracking-text1 text-5xl text-purple700">
            {title}
          </h2>
          <h6 className="font-light text-xl leading-text1 tracking-text1 text-purple900">
            {summary}
          </h6>
        </div>
        <p className="font-light text-base leading-text1 tracking-text1">
          {createdAt}
        </p>
      </div>
    </div>
  );
};

export default HeroArticle;
