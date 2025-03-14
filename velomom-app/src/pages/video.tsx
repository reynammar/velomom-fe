import Footer from '../components/organisms/Footer';
import MainNavbar from '../components/organisms/MainNavbar';
import VeloGuide from '../components/organisms/VeloGuide/VeloGuide';
import image1 from '../assets/images/imagevideo1.jpg';

const VideoPage = () => {
    const videos = [
        {
            image: image1,
            title: 'Mengatasi Baby Blues dengan Dukungan yang Tepat',
            description: 'Baby blues bisa terasa berat, tetapi dengan dukungan yang tepat, ibu dapat melewatinya. Kenali tanda-tandanya dan temukan cara efektif untuk menghadapinya.',
            isVideoPage: true,
            date: 'Senin, 33 Mei 2025',
        }, 
    ];
    return (
    <div className="flex items-center justify-center min-h-screen w-full bg-white font-lexend flex-wrap">
      <MainNavbar />
        {videos.map((video, index) => (
                <VeloGuide 
                    key={index}
                    titlePage='Video'
                    isVideoPage={video.isVideoPage} 
                />
            ))}
      <Footer/>
    </div>
    );
};

export default VideoPage;