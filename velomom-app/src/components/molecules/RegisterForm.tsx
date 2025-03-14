import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormHeader from '../atoms/forms/FormHeader';
import InputField from '../atoms/forms/InputField';
import Button from '../atoms/Button';
import { register } from '../../api/services/auth';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await register(email, password, name); // username = email (kalau dari backend kamu seperti itu)
      alert('Registrasi berhasil! Silakan login.');
      navigate('/login'); // 👈 redirect ke halaman login
    } catch (error: any) {
      console.error('Full error:', error);
      alert(error?.response?.data?.message || 'Registrasi gagal!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-[540px] p-6 mr-4">
      <FormHeader 
        title="Selamat Datang!" 
        subtitle="Sudah punya akun?" 
        linkText="Masuk" 
        linkHref="/login" 
      />

      <InputField
        label="Nama"
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        classname="block text-xl font-bold mb-1 text-purple700"
        placeholder="Masukkan nama"
      />
      <InputField
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        classname="block text-xl font-bold mb-1 text-purple700"
        placeholder="Masukkan email"
      />
      <InputField
        label="Password"
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        classname="block text-xl font-bold mb-1 text-purple700"
        placeholder="Masukkan password"
      />

      <Button
        buttonType="submit"
        classname="w-full py-3 px-6 bg-purple500 text-white rounded-2xl hover:bg-purple700 transition-all duration-300 cursor-pointer"
      >
        Daftar
      </Button>
    </form>
  );
};

export default RegisterForm;
