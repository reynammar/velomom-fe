import Footer from "../components/organisms/Footer"
import MainNavbar from "../components/organisms/MainNavbar"
import ArticlePage from "../components/organisms/VeloGuide/ArticlePage"

const DetailArtikel = () => {
    return(
        <div className="flex w-full min-h-screen bg-white font-lexend flex-wrap">
            <MainNavbar/>
            <ArticlePage/>
            <Footer/>
        </div>
    )
}

export default DetailArtikel