import '../../index.css'

interface CircleProps {
    classname?: string;
}

const CircleBackground = ({classname}: CircleProps) => {
    return (
        <div className={`absolute ${classname} bg-purple50 drop-shadow-xl rounded-full top-93 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-11 inner-shadow backdrop-blur-[15.6px]`}></div>
    );
};

export default CircleBackground;