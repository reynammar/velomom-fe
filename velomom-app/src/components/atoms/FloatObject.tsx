interface FloatProps {
    classname?: string;
    image: string;
}

const FloatObject = ({ classname, image }: FloatProps) => {
    return (
    <img src={image} alt="star" className={`absolute flex space-x-2 ${classname}`} />
    );
};

export default FloatObject;