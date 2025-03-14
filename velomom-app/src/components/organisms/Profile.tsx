import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import profile from '../../assets/images/profile.png'

const Profile = () => {
  return (
    <div className='w-full flex pr-primaryPad'>
        <div className="flex flex-col py-14 px-10 gap-12 mt-20 shadow-sidebar">
            <div className="flex px-8 items-center">
                <h4 className="font-semibold text-3xl leading-text1 tracking-text1 text-purple700">Profile</h4>
            </div>
            <div className="flex flex-col gap-4 px-12 justify-center">
                <div className="flex gap-4 items-center">
                    <FontAwesomeIcon icon={faGear} className="w-10 h-10 text-purple500" />
                    <Link to="/">
                    <h5 className="font-semibold text-2xl leading-text1 tracking-text1 text-purple500 hover:text-purple700 transition-all duration-150">Pengaturan</h5>
                    </Link>
                </div>
                <div className="flex gap-4 items-center">
                    <FontAwesomeIcon icon={faRightFromBracket} className="w-10 h-10 text-purple500" />
                    <Link to="/">
                    <h5 className="font-semibold text-2xl leading-text1 tracking-text1 text-purple500 hover:text-purple700 transition-all duration-150">Log Out</h5>
                    </Link>
                </div>
            </div>
        </div>
        <div className='flex mt-32 mb-10 ml-28 gap-7 w-[60%]'>
            <div className="flex flex-col gap-6 p-6 items-center rounded-xl shadow-md w-[40%] h-80">
                <img src={profile} alt="" className="rounded-full w-48 h-48 object-cover object-top" />
                <div className="flex px-6 justify-center items-center">
                    <h4 className="font-semibold text-3xl leading-text1 tracking-text1 text-purple700 text-center">Lastri Widya</h4>
                </div>
            </div>
            <div className="flex flex-col gap-6 p-6 items-center rounded-xl shadow-md w-[60%]">
                <img src={profile} alt="" className="rounded-full w-48 h-48 object-cover object-top" />
            </div>
        </div>
    </div>
  )
}

export default Profile
