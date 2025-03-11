import Footer from "../components/organisms/Footer"
import MainNavbar from "../components/organisms/MainNavbar"
import VideoPage from "../components/organisms/VeloGuide/VideoPage"

const DetailVideo = () => {
    return(
        <div className="flex w-full min-h-screen bg-white font-lexend flex-wrap">
            <MainNavbar/>
            <VideoPage/>
            <Footer/>
        </div>
    )
}

export default DetailVideo