import Button from "../components/atoms/Button"
import Footer from "../components/organisms/Footer"
import MainNavbar from "../components/organisms/MainNavbar"
import img from "../assets/images/404.png"

const notfound = () => {
  return (
    <div className="flex items-center justify-center w-full font-lexend flex-wrap">
        <MainNavbar/>
        <div className="flex items-center justify-between h-screen">
            <div>
                <img src={img} alt="404 not found" className="w-xl" />
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <h1 className="font-bold text-9xl leading-text1 tracking-text1 text-purple500">404</h1>
                <h3 className="font-semibold text-5xl leading-text1 tracking-text1 text-purple900">OOPS! Page not avaible</h3>
                <h5 className="font-semibold text-3xl leading-text1 tracking-text1 text-purple900">Want to explore other pages?</h5>
                <Button isRedirect={true} redirectTo="/home" classname="bg-purple500 hover:bg-purple-700 py-2 px-6 rounded-2xl text-white font-semibold mt-5" >
                    Start to Explore
                </Button>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default notfound
