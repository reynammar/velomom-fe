// src/pages/ArticlePage.tsx
import Footer from '../components/organisms/Footer';
import MainNavbar from '../components/organisms/MainNavbar';
import VeloGuide from '../components/organisms/VeloGuide/VeloGuide';
import image from '../assets/images/artikel.jpg';

const ArticlePage = () => {
    const articles = [
        {
            image: image,
            title: 'Mengatasi Baby Blues dengan Dukungan yang Tepat',
            description: 'Baby blues bisa terasa berat, tetapi dengan dukungan yang tepat, ibu dapat melewatinya. Kenali tanda-tandanya dan temukan cara efektif untuk menghadapinya.',
            isVideoPage: false,
            date: 'Senin, 33 Mei 2025',
        }, 
    ];

    return (
        <div className="flex items-center justify-center min-h-screen w-full bg-white font-lexend flex-wrap">
            <MainNavbar />
            {articles.map((article, index) => (
                <VeloGuide 
                    key={index}
                    titlePage='Artikel'
                    isVideoPage={article.isVideoPage}
                />
            ))}
            <Footer />
        </div>
    );
};

export default ArticlePage;