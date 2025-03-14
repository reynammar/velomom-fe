import Footer from "../components/organisms/Footer"
import MainNavbar from "../components/organisms/MainNavbar"
import TambahJournal2 from "../components/organisms/Selfcare/TambahJournal2"

const tambahjurnal = () => {
  return (
    <div className="flex w-full min-h-screen bg-white font-lexend flex-wrap">
            <MainNavbar/>
            <TambahJournal2/>
            <Footer/>
    </div>
  )
}

export default tambahjurnal
