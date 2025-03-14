
interface FeaturedImagesProps{
    imageURL: string;
}

const FeaturedImages = ({imageURL}: FeaturedImagesProps) => {
  return (
    <div className="flex flex-col gap-2 w-fit">
      <img src={imageURL} alt="featured-image" />
    </div>
  );
};

export default FeaturedImages;
