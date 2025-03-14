import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion'

interface SliderIndicatorsProps {
    currentIndex: number;
    totalItems: number;
    onSelect: (index: number) => void;
}

const SliderIndicators = ({ currentIndex, totalItems, onSelect }: SliderIndicatorsProps) => {
    return (
        <div className="flex gap-3">
            {Array.from({ length: totalItems }).map((_, index) => (
                <motion.div
                    key={index}
                    onClick={() => onSelect(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                >
                    <FontAwesomeIcon
                        icon={faCircle}
                        className={`w-6 ${currentIndex === index ? 'text-purple500' : 'text-purple100'}`}
                    />
                </motion.div>
            ))}
        </div>
    );
};

export default SliderIndicators;