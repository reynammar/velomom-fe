import { faCalendarDays, faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Icon from '../atoms/Icon';

interface EventProps {
    image: string;
    title: string;
    desc: string;
    price: number;
    quota: string;
    date: string;
    time: string;
    location: string;
    small: boolean;
}

const EventCard = ({ image, title, desc, price, quota, date, time, location, small = false }: EventProps) => {
  return (
    <div className={`bg-white flex items-center ${small ? 'px-7 py-6' : 'px-9 py-6'} rounded-2xl gap-12 shadow-md hover:bg-purple50 transition ease-in-out duration-300 cursor-pointer`}>
      {!small && <img src={image} alt="event image" className="rounded-3xl w-[272px] h-96" />}
      <div className="flex flex-col justify-center gap-3">
        <div className="flex flex-col gap-1">
          <h3 className={`font-bold ${small ? 'text-2xl' : 'text-4xl'} leading-10 text-purple900 tracking-tight`}>{title}</h3>
          <h6 className={`font-light ${small ? 'text-[15px]' : 'text-[18px]'} leading-[150%] ${small ? 'line-clamp-2' : ''}`}>{desc}</h6>
        </div>
        <div className="flex gap-3">
          <div className="bg-purple100 py-1 px-6 rounded-xl text-purple800 font-medium text-[18px] flex items-center justify-center">
            <h6>{price}</h6>
          </div>
          <div className="bg-purple100 py-1 px-6 rounded-xl text-purple800 font-medium text-[18px] flex items-center justify-center">
            <h6>{quota}</h6>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex gap-2">
            <Icon icon={faCalendarDays} className="text-purple500" link={''} />
            <h6 className="font-medium text-xl">{date}</h6>
          </div>
          <div className="flex gap-2">
            <Icon icon={faClock} className="text-purple500" link={''} />
            <h6 className="font-medium text-xl">{time}</h6>
          </div>
          <div className="flex gap-2">
            <Icon icon={faLocationDot} className="text-purple500" link={''} />
            <h6 className="font-medium text-xl">{location}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
