import { useState } from 'react'
import icon from '../../../assets/images/clipboard.svg'
import icon2 from '../../../assets/images/emotion-stage.svg'
import icon3 from '../../../assets/images/checklist.svg'
import InputField from '../../atoms/forms/InputField'
import Button from '../../atoms/Button'
import { useNavigate } from 'react-router-dom'

const TambahJournal = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    judul: '',
    cerita: '',
    rasa: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleNext = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    localStorage.setItem('journalData', JSON.stringify(formData))
    navigate('/tambah-journal2')
  }

  return (
    <div className='w-full flex pr-primaryPad'>
      {/* Sidebar */}
      <div className="flex flex-col py-14 px-10 gap-8 mt-20 shadow-stepper">
        {/* Breadcrumbs */}
        <div className="flex flex-col gap-10 relative">
          <div className='border-b-8 border-grey100 w-44 transform rotate-90 absolute top-[155px] right-[150px] z-10'></div>
          <div className='border-b-8 border-purple500 w-8 transform rotate-90 absolute top-[80px] right-[222px] z-20'></div>
          {/* step 1 */}
          <div className="flex pr-2 pl-8 gap-4 items-center z-20">
            <div className="bg-purple500 w-20 h-20 flex justify-center items-center rounded-full">
              <img src={icon} alt="clipboard-icon" />
            </div>
            <h6 className='font-semibold text-xl text-purple900 leading-text1 tracking-text1'>Tulis jurnalmu</h6>
          </div>
          {/* step 2 */}
          <div className="flex pr-2 pl-8 gap-4 items-center z-20">
            <div className="bg-grey100 w-20 h-20 flex justify-center items-center rounded-full">
              <img src={icon2} alt="emotion-icon" />
            </div>
            <h6 className='font-semibold text-xl text-purple900 leading-text1 tracking-text1'>Tingkat Emosimu</h6>
          </div>
          {/* step 3 */}
          <div className="flex pr-2 pl-8 gap-4 items-center z-20">
            <div className="bg-grey100 w-20 h-20 flex justify-center items-center rounded-full">
              <img src={icon3} alt="checklist-icon" />
            </div>
            <h6 className='font-semibold text-xl text-purple900 leading-text1 tracking-text1'>Selesai</h6>
          </div>
        </div>
      </div>

      {/* Form step 1 */}
      <div className='flex flex-col mt-32 mb-10 ml-28 gap-11 w-[60%]'>
        {/* form */}
        <div className='flex flex-col gap-8'>
          <h2 className='font-bold text-5xl leading-text2 tracking-text1 text-purple700'>Buat Jurnal</h2>
          <form className='flex flex-col' onSubmit={handleNext}>
            <InputField 
              label="Judul jurnal" 
              type="text" 
              name="judul" 
              value={formData.judul}
              onChange={handleChange}
              classname='block text-2xl font-semibold mb-1 text-purple700' 
              placeholder='Mulai mengetik...'
            />
            <InputField 
              label="Apa yang ingin kamu ceritakan hari ini?" 
              name="cerita" 
              value={formData.cerita}
              onChange={handleChange}
              classname='block text-2xl font-semibold mb-1 text-purple700' 
              placeholder='Mulai mengetik...' 
              classInput='w-full h-80'
              isTextArea={true}
            />
            <InputField 
              label="Apa yang kamu rasakan hari ini?" 
              name="rasa" 
              value={formData.rasa}
              onChange={handleChange}
              classname='block text-2xl font-semibold mb-1 text-purple700' 
              placeholder='Mulai mengetik...' 
              classInput='w-full h-24'
              isTextArea={true}
            />
            <div className='flex justify-end mt-8'>
              <Button 
                classname='bg-purple500 py-3 px-6 text-white rounded-2xl text-xl flex gap-2 w-56 justify-center items-center leading-text1 tracking-text1'
                buttonType="submit"
              >
                Selanjutnya
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TambahJournal
