import Footer from "../components/organisms/Footer"
import MainNavbar from "../components/organisms/MainNavbar"
import TambahJournal from "../components/organisms/Selfcare/TambahJournal"

const tambahjurnal = () => {
  return (
    <div className="flex w-full min-h-screen bg-white font-lexend flex-wrap">
            <MainNavbar/>
            <TambahJournal/>
            <Footer/>
    </div>
  )
}

export default tambahjurnal
