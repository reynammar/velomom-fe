import { faCalendarDays, faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Icon from '../atoms/Icon';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface SliderItemProps {
    image: string;
    title: string;
    description: string;
    price: string;
    date: string;
    time: string;
    location: string;
}

const SliderItem = ({ image, title, description, price, date, time, location}: SliderItemProps) => {
    return (
        <Link to='/'>
            <motion.div
                className="bg-white hover:bg-purple50 flex items-center px-9 py-6 rounded-2xl gap-12 transition-all duration-200"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.2 }}
            >
                <img src={image} alt="slider image" className="rounded-3xl w-[272px] h-96" />
                <div className="flex flex-col justify-center gap-3">
                    <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-4xl leading-10 text-purple900 tracking-tight">{title}</h3>
                        <h6 className="font-light text-[18px] leading-7">{description}</h6>
                    </div>
                    <div className="bg-[#CEB0FA] py-1 px-6 rounded-xl w-[124px] h-9 text-purple800 font-medium text-[18px] flex items-center justify-center">
                        <h6>{price}</h6>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="flex gap-2">
                            <Icon icon={faCalendarDays} className='text-purple500' link="" />
                            <h6 className="font-medium text-xl">{date}</h6>
                        </div>
                        <div className="flex gap-2">
                            <Icon icon={faClock} className='text-purple500' link="" />
                            <h6 className="font-medium text-xl">{time}</h6>
                        </div>
                        <div className="flex gap-2">
                            <Icon icon={faLocationDot} className='text-purple500' link="" />
                            <h6 className="font-medium text-xl">{location}</h6>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

export default SliderItem;