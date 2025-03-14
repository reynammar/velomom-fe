import Footer from "../components/organisms/Footer"
import MainNavbar from "../components/organisms/MainNavbar"
import EventDetail from "../components/organisms/VeloVent/EventDetail"

const DetailEventPage = () => {
    return(
        <div className="flex w-full min-h-screen bg-white font-lexend flex-wrap">
            <MainNavbar/>
            <EventDetail/>
            <Footer/>
        </div>
    )
}

export default DetailEventPage