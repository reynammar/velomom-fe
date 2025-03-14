import { useState } from 'react';
import SliderItem from './SliderItem';
import SliderIndicators from './SliderIndicators';
import img from '../../assets/images/slider-image.jpg'
import NavigationButton from './NavigationButton';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

const sliderData = [
    {
        image: img,
        title: 'Cara mengelola Stres untuk para Ibu',
        description: 'Pelajari cara mengatasi stres dan tekanan emosional setelah melahirkan dengan teknik relaksasi sederhana serta dukungan profesional untuk menjaga kesehatan mental ibu.',
        price: 'Rp65.000',
        date: 'Minggu, 22 Oktober 2025',
        time: '13.00 - 16.00',
        location: 'Online',
    },
    {
        image: img,
        title: 'Belajar mengenai menjadi ibu',
        description: 'Pelajari cara mengatasi stres dan tekanan emosional setelah melahirkan dengan teknik relaksasi sederhana serta dukungan profesional untuk menjaga kesehatan mental ibu.',
        price: 'Rp65.000',
        date: 'Minggu, 22 Oktober 2025',
        time: '13.00 - 16.00',
        location: 'Online',
    },
];

const slideVariants = {
    hidden: (direction: number) => ({
        x: direction > 0 ? 100 : -100,
        opacity: 0,
    }),
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5 },
    },
    exit: (direction: number) => ({
        x: direction > 0 ? -100 : 100,
        opacity: 0,
        transition: { duration: 0.5 },
    }),
};

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1));
    };

    const handleSelect = (index: number) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    return (
        <div className="flex flex-col justify-between items-center gap-11">
            <div className="flex justify-between items-center gap-12">
                <NavigationButton icon={faArrowLeft} onClick={handlePrev} />
                <AnimatePresence initial={false} mode="wait">
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <SliderItem {...sliderData[currentIndex]} />
                    </motion.div>
                </AnimatePresence>
                <NavigationButton icon={faArrowRight} onClick={handleNext} />
            </div>
            <SliderIndicators currentIndex={currentIndex} totalItems={sliderData.length} onSelect={handleSelect} />
        </div>
    );
};

export default Slider;