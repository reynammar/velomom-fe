import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Icon from '../atoms/Icon';

const ContactInfo = () => {
    return (
        <div className='flex flex-col gap-4.5'>
            <div className="flex gap-4">
                <Icon icon={faEnvelope} className='bg-purple50 rounded-full py-2 px-2 text-purple500 text-xl' link="mailto:velomom@gmail.com" />
                <h6 className="font-light text-xl">velomom@gmail.com</h6>
            </div>
            <div className="flex gap-4">
                <Icon icon={faPhone} className='bg-purple50 rounded-full py-2 px-2 text-purple500 text-xl' link="mailto:velomom@gmail.com" />
                <h6 className="font-light text-xl">+62 851 2345 6789</h6>
            </div>
        </div>
    );
};

export default ContactInfo;