import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

interface SliderIndicatorsProps {
    currentIndex: number;
    totalItems: number;
    onSelect: (index: number) => void;
}

const SliderIndicators = ({ currentIndex, totalItems, onSelect }: SliderIndicatorsProps) => {
    return (
        <div className="flex gap-3">
            {Array.from({ length: totalItems }).map((_, index) => (
                <FontAwesomeIcon
                    key={index}
                    icon={faCircle}
                    className={`w-6 ${currentIndex === index ? 'text-purple500' : 'text-purple100'}`}
                    onClick={() => onSelect(index)}
                />
            ))}
        </div>
    );
};

export default SliderIndicators;