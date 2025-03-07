import Footer from "../components/organisms/Footer"
import MainNavbar from "../components/organisms/MainNavbar"
import JournalSection from "../components/organisms/Selfcare/JournalSection"

const Journaling = () => {
    return(
    <div className="flex items-center justify-center w-full min-h-screen bg-white font-lexend flex-wrap">
      <MainNavbar />
      <JournalSection/>
      <Footer />
    </div>
    )
}


export default Journaling