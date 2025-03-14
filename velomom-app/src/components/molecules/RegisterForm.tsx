import FormHeader from '../atoms/forms/FormHeader';
import InputField from '../atoms/forms/InputField';
import Button from '../atoms/Button';

const LoginForm = () => {
    return (
        <form action="" className="w-[540px] p-6 mr-4">
            <FormHeader 
                    title="Selamat Datang!" 
                    subtitle="Sudah punya akun?" 
                    linkText="Masuk" 
                    linkHref="/login" 
                />
            <InputField label="Nama" type="text" name="name" classname='block text-xl font-bold mb-1 text-purple700' placeholder='Masukkan nama'/>
            <InputField label="Email" type="email" name="email" classname='block text-xl font-bold mb-1 text-purple700' placeholder='Masukkan email'/>
            <InputField label="Password" type="password" name="password" classname='block text-xl font-bold mb-1 text-purple700' placeholder='Masukkan password'/>
            <Button buttonType='submit' classname='w-full py-3 px-6 bg-purple500 text-white rounded-2xl hover:bg-purple700 transition-all duration-300 cursor-pointer'>
                Daftar
            </Button>
        </form>
    );
};

export default LoginForm;