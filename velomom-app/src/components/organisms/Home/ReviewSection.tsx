import UserReviewCard from "../../molecules/ReviewCard";
import user1 from '../../../assets/images/user1.png';
import user2 from '../../../assets/images/user2.png';
import user3 from '../../../assets/images/user3.png';
import user4 from '../../../assets/images/user4.png';

const reviewData = [
    {
        userName: 'Sartika Putri',
        userPhoto: user1,
        rating: 5,
        comment: 'VeloMom sangat membantu saya melewati masa sulit setelah melahirkan. Fitur journaling dan self-care-nya membuat saya lebih tenang dan percaya diri menjalani hari-hari sebagai ibu.'
    },
    {
        userName: 'Ammylia Kusuma',
        userPhoto: user2,
        rating: 5,
        comment: 'Senang sekali akhirnya ada platform yang peduli dengan kesehatan mental ibu. VeloMom memberikan ruang aman untuk saling berbagi cerita dan mencari dukungan.'
    },
    {
        userName: 'Listia Lusi',
        userPhoto: user3,
        rating: 5,
        comment: 'Velomom membantu saya lebih memahami kebutuhan emosional saya sebagai ibu. Saya lebih sadar pentingnya merawat diri agar bisa memberikan yang terbaik untuk anak.'
    },
    {
        userName: 'Dela Yuni',
        userPhoto: user4,
        rating: 4,
        comment: 'Mengikuti webinar di VeloVent membuka wawasan saya tentang baby blues. Narasumbernya berpengalaman dan materinya relevan dengan perjalanan saya sebagai ibu baru.'
    }
];

const ReviewSection = () => {
    return (
        <section className="w-full py-20 px-[70px] overflow-hidden">
            <div className="flex flex-col gap-11">
                <h2 className="font-semibold text-third w-full text-5xl">
                    Apa kata mereka tentang VeloMom?
                </h2>
                <div className="grid grid-cols-2 gap-5">
                    {reviewData.map((review, index) => (
                        <UserReviewCard 
                            key={index}
                            userName={review.userName} 
                            userPhoto={review.userPhoto} 
                            rating={review.rating} 
                            comment={review.comment} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ReviewSection;