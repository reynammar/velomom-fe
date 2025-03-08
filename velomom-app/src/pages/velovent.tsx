import Footer from '../components/organisms/Footer';
import MainNavbar from '../components/organisms/MainNavbar';
import VeloVent from '../components/organisms/VeloVent/VeloVent'

const VeloVentPage = () => {
    return (
    <div className="flex items-center justify-center min-h-screen w-full bg-white font-lexend flex-wrap">
      <MainNavbar />
        <VeloVent/>
      <Footer/>
    </div>
    );
};

export default VeloVentPage;