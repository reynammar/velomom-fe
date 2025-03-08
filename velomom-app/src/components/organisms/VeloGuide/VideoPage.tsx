import VideoCard from "../../molecules/VideoCard"
import img1 from '../../../assets/images/imagevideo1.jpg'
import img2 from '../../../assets/images/imagevideo2.jpg'

const VideoPage = () => {
    const videos = [
            {
                image: img1,
                title: 'Teknik Relaksasi Cepat untuk Ibu yang Sering Kewalahan',
                description: 'Cara mudah menenangkan diri saat merasa lelah dan stres.',
            },
            {
                image: img2,
                title: 'Tips Mengatasi Baby Blues dengan Dukungan yang Tepat',
                description: 'Cara menghadapi baby blues agar ibu merasa lebih tenang dan didukung.',
            },
        ];
    return(
        <div className="px-[70px] overflow-hidden pt-[110px] pb-14 flex flex-col gap-10 w-full">
            <div className="flex gap-5">
                {/* Main */}
                <div className="w-[70%] flex flex-col gap-9">
                    <iframe 
                        className="bg-blue-50 rounded-[10px] aspect-video" 
                        width="100%" 
                        height="500" 
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                    <div className="flex flex-col gap-3">
                        <h4 className="font-semibold text-[32px] text-third leading-[150%]">
                            Teknik Relaksasi Cepat untuk Ibu yang Sering Kewalahan
                        </h4>
                        <p className="font-light text-[17px] leading-[150%] text-secondary text-justify">
                            Menjadi ibu, terutama setelah melahirkan, bisa terasa melelahkan secara fisik dan emosional. Rasa kewalahan sering muncul, tetapi ada cara sederhana untuk menenangkan diri dengan cepat. Teknik pernapasan dalam dapat membantu mengurangi stres dalam hitungan menit. Peregangan ringan atau meditasi singkat juga bisa memberikan efek menenangkan. Mendengarkan musik yang menenangkan atau sekadar menikmati secangkir teh hangat dapat membantu mengembalikan keseimbangan emosi. Jika memungkinkan, luangkan waktu beberapa menit untuk berjalan santai atau menikmati udara segar. Hal-hal kecil ini dapat membuat perbedaan besar dalam menjaga ketenangan dan kebahagiaan ibu.
                        </p>
                    </div>
                </div>

                {/* Aside */}
                <div className="w-[38%] flex gap-5 pl-6 border-l-2 border-pinkprimary ">
                    <div className="flex flex-col gap-4">
                        <h5 className="font-semibold text-2xl leading-[150%] text-third">Video Lainnya</h5>
                        {videos.map((video, index) => (
                        <VideoCard 
                        key={index}
                        image={video.image} 
                        title={video.title} 
                        description={video.description} />
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoPage