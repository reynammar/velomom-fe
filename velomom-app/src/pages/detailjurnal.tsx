import Footer from "../components/organisms/Footer"
import MainNavbar from "../components/organisms/MainNavbar"
import JournalDetail from "../components/organisms/Selfcare/JournalDetail"

const detailjurnal = () => {
    return(
        <div className="flex w-full min-h-screen bg-white font-lexend flex-wrap">
            <MainNavbar/>
            <JournalDetail/>
            <Footer/>
        </div>
    )
}

export default detailjurnal