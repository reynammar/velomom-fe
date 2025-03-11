import img from '../../../assets/images/category-card.png';
const ArticlePage = () => {
    return(
        <div className="overflow-hidden pt-[81px] pb-14 flex flex-col gap-10 w-full">
            {/* Header */}
            <div className="flex pr-[72px] w-full bg-gradient-to-b from-custom1 via-custom2 to-custom3 z-10 py-30 items-center relative">
                <div className="w-full relative mr-52"></div>
                <img src={img} alt="artikel-image" className='absolute top-20 left-16 w-[34.5rem] h-[33.5rem] object-cover'/>
                <div className="flex flex-col gap-7 justify-center">
                    <div className="flex flex-col gap-3">
                        <h2 className="font-semibold leading-text2 tracking-text1 text-5xl text-purple700">Mengatasi Baby Blues dengan Dukungan yang Tepat</h2>
                        <h6 className="font-light text-xl leading-text1 tracking-text1 text-purple900">Baby blues bisa terasa berat, tetapi dengan dukungan yang tepat, ibu dapat melewatinya. Kenali tanda-tandanya dan temukan cara efektif untuk menghadapinya.</h6>
                    </div>
                    <p className="font-light text-base leading-text1 tracking-text1 ">Senin, 33 Mei 2025</p>
                </div>
            </div>
            {/* End Header */}

            <div className='flex'>
                {/* Isi */}

            </div>
            
        </div>
    );
}


export default ArticlePage