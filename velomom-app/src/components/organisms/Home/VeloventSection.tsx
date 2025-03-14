import Button from "../../atoms/Button";
import Slider from '../../molecules/Slider';

const VeloventSection = () => {
    return (
        <section className="w-full py-9 px-[70px] overflow-hidden gap-10 bg-gradient-to-b from-custom1 via-custom2 to-red100">
            <div className="w-full flex flex-col gap-12">
                <div className="w-full flex items-center justify-between">
                    <h2 className="w-[55%] font-semibold text-5xl text-purple700 leading-14">Ikuti webinar menarik di VeloVent!</h2>
                    <Button classname="text-center rounded-2xl py-3 px-6 text-white w-[220px] h-12 bg-purple500 hover:bg-purple700" isRedirect={true} redirectTo="/login">
                        Selengkapnya
                    </Button>
                </div>
                <Slider />
            </div>
        </section>
    );
};

export default VeloventSection;