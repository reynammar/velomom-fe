import { faPlus, faCalendarDays, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imageGrup from '../../../assets/images/image-group.png';
import profileuser1 from '../../../assets/images/profileuser1.png';
import profileuser2 from '../../../assets/images/profileuser2.png';
import Button from "../../atoms/forms/ButtonForm";
import emoticon1 from '../../../assets/images/Emotion.svg';
import emoticon2 from '../../../assets/images/Emotion2.svg';
import emoticon3 from '../../../assets/images/Emotion3.svg';
import emoticon4 from '../../../assets/images/Emotion4.svg';
import { Link } from "react-router-dom";

const JournalSection = () => {
    return (
        <div className="px-[70px] overflow-hidden py-[120px] flex flex-col gap-5">
            {/* Header */}
            <div className="bg-gradient-to-b from-custom1 via-custom2 to-custom3 pb-10 pt-[108px] rounded-3xl relative overflow-hidden">
                <div className="w-[1442px] h-[900px] rounded-t-full bg-radial from-[#613E8F1A] to-[#ac9dc01a] absolute -left-30 top-10 inset-shadow-sm inset-shadow-white/30 shadow-xl"></div>
                <div className="px-[250px] text-center text-purple700 flex flex-col gap-4 mt-10">
                    <h1 className="font-semibold text-6xl leading-15">Ekspresikan Perasaan dengan Journaling</h1>
                    <h6 className="font-medium text-xl">Catat perasaan harian untuk mengenali dan mengelola emosimu</h6>
                </div>
            </div>
            {/* End Header */}

            {/* Tombol tambah */}
            <Link to="/tambah-journal">
            <div className="border-2 border-purple500 hover:border-white hover:bg-purple500 rounded-3xl flex justify-center py-8 group transition-all duration-300">
                <div className="flex items-center gap-6">
                    <div className="bg-purple500 group-hover:bg-white rounded-full w-12 h-12 flex items-center justify-center">
                        <FontAwesomeIcon icon={faPlus} className="text-2xl text-white group-hover:text-purple500" />
                    </div>
                    <h3 className="font-semibold text-[38px] text-purple500 group-hover:text-white">Buat Jurnal</h3>
                </div>
            </div>
            </Link>
            {/* End tombol tambah */}

            {/* Riwayat Jurnal */}
            <div className="flex gap-8">
                <div className="w-[70%] p-9 shadow-md rounded-3xl flex flex-col gap-[28px]">
                    <div className="flex justify-between">
                        <h3 className="font-semibold text-[38px] text-purple700">Riwayat Jurnalmu</h3>
                        <div className="rounded-full px-4 bg-purple500 flex justify-center items-center text-white hover:bg-purple700 transition-all duration-300">
                            <FontAwesomeIcon icon={faCalendarDays} className="text-3xl" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="py-4 px-7 rounded-3xl bg-purple50">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <img src={emoticon1} alt="frustasi" className="w-[124px]" />
                                    <div className="flex flex-col gap-3">
                                        <div className="flex flex-col gap-0.5 text-purple900">
                                            <p className="font-light text-[16px]">Senin,</p>
                                            <h6 className="font-light text-xl">27 Juni 2025</h6>
                                        </div>
                                        <div className="bg-purple100 py-1 px-6 rounded-xl flex justify-center items-center font-light text-[18px]">Frustasi</div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 text-purple900">
                                    <h6 className="font-semibold text-xl">Merasa Sangat Kewalahan</h6>
                                    <p className="font-light text-[15px]">Hari ini rasanya benar-benar kacau. Si kecil rewel dari pagi, aku bahkan belum sempat duduk tenang sejak bangun tidur. Setiap kali aku mencoba menaruhnya di kasur, dia langsung menangis lagi.</p>
                                </div>
                                <Button buttonType='button'>
                                    Lihat
                                </Button>
                            </div>
                        </div>
                        <div className="py-4 px-7 rounded-3xl bg-purple100">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <img src={emoticon2} alt="sedih" className="w-[124px]" />
                                    <div className="flex flex-col gap-3">
                                        <div className="flex flex-col gap-0.5 text-purple900">
                                            <p className="font-light text-[16px]">Senin,</p>
                                            <h6 className="font-light text-xl">27 Juni 2025</h6>
                                        </div>
                                        <div className="bg-purple100 py-1 px-6 rounded-xl flex justify-center items-center font-light text-[18px]">Sedih</div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 text-purple900">
                                    <h6 className="font-semibold text-xl">Hari yang Penuh Tantangan</h6>
                                    <p className="font-light text-[15px]">Aku merasa sedikit sedih hari ini. Ada banyak hal yang harus dilakukan, tapi energiku terbatas. Si kecil lebih manja dari biasanya, membuatku kesulitan menyelesaikan pekerjaan rumah...</p>
                                </div>
                                <Button buttonType='button'>
                                    Lihat
                                </Button>
                            </div>
                        </div>
                        <div className="py-4 px-7 rounded-3xl bg-purple50">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <img src={emoticon3} alt="biasa" className="w-[124px]" />
                                    <div className="flex flex-col gap-3">
                                        <div className="flex flex-col gap-0.5 text-purple900">
                                            <p className="font-light text-[16px]">Senin,</p>
                                            <h6 className="font-light text-xl">27 Juni 2025</h6>
                                        </div>
                                        <div className="bg-purple100 py-1 px-6 rounded-xl flex justify-center items-center font-light text-[18px]">Biasa</div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 text-purple900">
                                    <h6 className="font-semibold text-xl">Rutinitas Seperti Biasa</h6>
                                    <p className="font-light text-[15px]">Hari ini berjalan seperti biasanya. Tidak ada hal yang terlalu sulit, tapi juga tidak ada yang terlalu menyenangkan. Aku hanya menjalani hari dengan mengikuti alurnya seperti biasa...</p>
                                </div>
                                <Button buttonType='button'>
                                    Lihat
                                </Button>
                            </div>
                        </div>
                        <div className="py-4 px-7 rounded-3xl bg-purple50">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <img src={emoticon4} alt="senang" className="w-[124px]" />
                                    <div className="flex flex-col gap-3">
                                        <div className="flex flex-col gap-0.5 text-purple900">
                                            <p className="font-light text-[16px]">Senin,</p>
                                            <h6 className="font-light text-xl">27 Juni 2025</h6>
                                        </div>
                                        <div className="bg-purple100 py-1 px-6 rounded-xl flex justify-center items-center font-light text-[18px]">Senang</div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 text-purple900">
                                    <h6 className="font-semibold text-xl">Hari yang Lebih Baik</h6>
                                    <p className="font-light text-[15px]">Hari ini cukup menyenangkan. Si kecil sempat tertawa beberapa kali, dan aku berhasil mencuri sedikit waktu untuk menikmati secangkir kopi. Meski lelah, aku merasa cukup bersyukur...</p>
                                </div>
                                <Button buttonType='button'>
                                    Lihat
                                </Button>
                            </div>
                        </div>
                    </div>
                    {/* Indikator Lihat Selengkapnya */}
                    <div className="flex gap-4 items-center mt-6 justify-center">
                        <FontAwesomeIcon icon={faChevronDown} className="text-2xl text-purple500" />
                        <p className="font-medium text-xl">Lihat selengkapnya</p>
                    </div>
                </div>

            {/* Bagian Family Sharing */}
                <div className="flex flex-col gap-[34px] px-6 py-8 rounded-2xl shadow-md w-[30%] h-[40%]">
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col items-center gap-6">
                            <img src={imageGrup} alt="gambar grup" className="w-[172px]" />
                            <h4 className="font-medium text-[32px] text-purple700">Family Sharing</h4>
                        </div>
                        <div className="flex flex-col px-7 gap-3">
                            <div className="flex gap-4 items-center">
                                <img src={profileuser1} alt="profile user" />
                                <h6 className="font-medium text-xl text-purple900">Kamu</h6>
                            </div>
                            <div className="flex gap-4 items-center">
                                <img src={profileuser2} alt="profile user" />
                                <h6 className="font-medium text-xl text-purple900">Reynarif Ammar</h6>
                            </div>
                        </div>
                    </div>
                    <Button buttonType='button'>
                        Lihat
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default JournalSection;