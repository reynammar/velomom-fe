import Footer from "../components/organisms/Footer"
import MainNavbar from "../components/organisms/MainNavbar"
import Profile from "../components/organisms/Profile"

const ProfilePage = () => {
  return (
    <div className="flex w-full min-h-screen bg-white font-lexend flex-wrap"> 
        <MainNavbar/>
        <Profile/>
        <Footer/>
    </div>
  )
}

export default ProfilePage
