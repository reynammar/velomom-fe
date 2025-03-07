import imageGrup from '../../assets/images/image-group.png';
import profileuser1 from '../../assets/images/profileuser1.png';
import profileuser2 from '../../assets/images/profileuser2.png';
import Button from "../atoms/forms/ButtonForm";

const FamilySharing = () => {
    return (
        <div className="flex flex-col gap-[34px] px-6 py-8 rounded-2xl shadow-md w-[30%] h-[40%]">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col items-center gap-6">
                    <img src={imageGrup} alt="gambar grup" className="w-[172px]" />
                    <h4 className="font-medium text-[32px] text-third">Family Sharing</h4>
                </div>
                <div className="flex flex-col px-7 gap-3">
                    <div className="flex gap-4 items-center">
                        <img src={profileuser1} alt="profile user" />
                        <h6 className="font-medium text-xl text-secondary">Kamu</h6>
                    </div>
                    <div className="flex gap-4 items-center">
                        <img src={profileuser2} alt="profile user" />
                        <h6 className="font-medium text-xl text-secondary">Reynarif Ammar</h6>
                    </div>
                </div>
            </div>
            <Button buttonType='button'>Lihat</Button>
        </div>
    );
};

export default FamilySharing;