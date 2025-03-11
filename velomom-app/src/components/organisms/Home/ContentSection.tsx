import Button from "../../atoms/Button";
import ArticleCard from "../../molecules/GuideCard";
import VideoCard from "../../molecules/VideoCard";
import img from '../../../assets/images/artikel.jpg';
import img2 from '../../../assets/images/artikel2.jpg';
import img3 from '../../../assets/images/artikel3.jpg';
import img4 from '../../../assets/images/imagevideo1.jpg';
import img5 from '../../../assets/images/imagevideo2.jpg';
import img6 from '../../../assets/images/imagevideo3.jpg';

const ContentSection = () => {
    const articles = [
        {
            image: img,
            date: 'Senin, 33 Mei 2025',
            title: 'Mengatasi Baby Blues dengan Dukungan yang Tepat',
            description: 'Baby blues bisa terasa berat, tetapi dengan dukungan yang tepat, ibu dapat melewatinya. Kenali tanda-tandanya dan temukan cara efektif untuk menghadapinya.',
        },
        {
            image: img2,
            date: 'Senin, 33 Mei 2025',
            title: 'Pentingnya Self-care bagi Ibu Pasca Melahirkan',
            description: 'Ibu sering lupa merawat diri setelah melahirkan. Luangkan waktu untuk self-care agar tetap sehat secara fisik dan emosional dalam menghadapi peran baru sebagai ibu.',
        },
        {
            image: img3,
            date: 'Senin, 33 Mei 2025',
            title: 'Journaling sebagai Cara Mengenali Emosi Ibu',
            description: 'Menulis jurnal dapat membantu ibu memahami perasaannya, mengurangi stres, dan menciptakan ruang refleksi dalam menghadapi tantangan pasca melahirkan.',
        },
    ];

    const videos = [
        {
            image: img4,
            title: 'Teknik Relaksasi Cepat untuk Ibu yang Sering Kewalahan',
            description: 'Cara mudah menenangkan diri saat merasa lelah dan stres.',
        },
        {
            image: img5,
            title: 'Tips Mengatasi Baby Blues dengan Dukungan yang Tepat',
            description: 'Cara menghadapi baby blues agar ibu merasa lebih tenang dan didukung.',
        },
        {
            image: img6,
            title: 'Self-care Sederhana untuk Ibu Pasca Melahirkan',
            description: 'Aktivitas mudah yang membantu ibu merawat diri di tengah kesibukan.',
        },
    ];

    return (
        <section className="w-full flex flex-col items-center py-18 px-[70px] overflow-hidden gap-10">
            {/* Artikel */}
            <div className="w-full flex flex-col justify-center items-center gap-10">
                {/* Title */}
                <div className="w-full flex items-center justify-between">
                    <h2 className="w-[55%] font-semibold text-5xl text-purple700 leading-14">Artikel dari VeloGuide untukmu</h2>
                    <Button classname="text-center rounded-2xl py-3 px-6 text-white w-[220px] h-12 bg-purple500" isRedirect={true} redirectTo="/login">
                        Selengkapnya
                    </Button>
                </div>
                {/* Cards */}
                <div className="flex justify-between gap-5">
                    {articles.map((article, index) => (
                        <ArticleCard 
                            key={index}
                            image={article.image}
                            date={article.date}
                            title={article.title}
                            description={article.description}
                        />
                    ))}
                </div>

                <hr className="border-purple50 w-full border-1/2" />
            </div>

            {/* Video */}
            <div className="w-full flex flex-col justify-center items-center gap-10">
                {/* Title */}
                <div className="w-full flex items-center justify-between">
                    <h2 className="w-[55%] font-semibold text-5xl text-purple700 leading-14">Video dari VeloGuide untukmu</h2>
                    <Button classname="text-center rounded-2xl py-3 px-6 text-white w-[220px] h-12 bg-purple500 hover:bg-purple700" isRedirect={true} redirectTo="/video-page">
                        Selengkapnya
                    </Button>
                </div>
                {/* Cards */}
                <div className="grid grid-cols-3 gap-5">
                    {videos.map((video, index) => (
                        <VideoCard 
                            key={index}
                            image={video.image}
                            title={video.title}
                            description={video.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ContentSection