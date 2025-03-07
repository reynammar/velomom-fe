import LoginForm from '../molecules/LoginForm';
import RegisterForm from '../molecules/RegisterForm';
import image from '../../assets/images/Velomom.png';

interface AuthPageProps {
    isLogin: boolean;
}

const AuthPage = ({ isLogin }: AuthPageProps) => {
    return (
        <div className="flex h-screen font-lexend">
            <div className="flex-1 flex items-center justify-center">
                {isLogin ? <LoginForm /> : <RegisterForm />}
            </div>
            <div className="w-1/2 h-min-screen bg-gradient-to-b from-[#dcd1ec] to-[#C8A3FF] flex items-center justify-center">
                <div>
                    <div className='flex justify-center'>
                        <img src={image} alt="Logo Velomom" className='w-[250px]' />
                    </div>
                    <h1 className='bg-gradient-to-r from-[#6200EE] to-[#d856f1] bg-clip-text text-transparent text-[100px] font-lexend font-bold text-center'>VeloMom</h1>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;