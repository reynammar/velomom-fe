import Footer from "../components/organisms/Footer"
import MainNavbar from "../components/organisms/MainNavbar"
import TambahJournal3 from "../components/organisms/Selfcare/TambahJournal3"

const tambahjurnal3 = () => {
  return (
    <div className="flex w-full min-h-screen bg-white font-lexend flex-wrap">
            <MainNavbar/>
            <TambahJournal3/>
            <Footer/>
    </div>
  )
}

export default tambahjurnal3
