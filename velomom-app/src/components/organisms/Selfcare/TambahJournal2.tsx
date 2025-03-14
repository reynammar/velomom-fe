import icon from '../../../assets/images/clipboard.svg';
import icon2 from '../../../assets/images/emotion-stage2.svg';
import icon3 from '../../../assets/images/checklist.svg';
import Button from '../../atoms/Button';
import MoodInput from '../../molecules/MoodInput';

const TambahJournal2 = () => {
  return (
    <div className='w-full flex pr-primaryPad'>
      {/* Sidebar */}
      <div className="flex flex-col py-14 px-10 gap-8 mt-20 shadow-stepper">
        <div className="flex flex-col gap-10 relative">
          <div className='border-b-8 border-grey100 w-44 transform rotate-90 absolute top-[155px] right-[149px] z-10'></div>
          <div className='border-b-8 border-purple500 w-48 transform rotate-90 absolute top-[120px] right-[142px] z-20'></div>
          <div className="flex pr-2 pl-8 gap-4 items-center z-20">
            <div className="bg-purple500 w-20 h-20 flex justify-center items-center rounded-full">
              <img src={icon} alt="clipboard-icon" />
            </div>
            <h6 className='font-semibold text-xl text-purple900 leading-text1 tracking-text1'>Tulis jurnalmu</h6>
          </div>
          <div className="flex pr-2 pl-8 gap-4 items-center z-20">
            <div className="bg-purple500 w-20 h-20 flex justify-center items-center rounded-full">
              <img src={icon2} alt="emotion-icon" />
            </div>
            <h6 className='font-semibold text-xl text-purple900 leading-text1 tracking-text1'>Tingkat Emosimu</h6>
          </div>
          <div className="flex pr-2 pl-8 gap-4 items-center z-20">
            <div className="bg-grey100 w-20 h-20 flex justify-center items-center rounded-full">
              <img src={icon3} alt="checklist-icon" />
            </div>
            <h6 className='font-semibold text-xl text-purple900 leading-text1 tracking-text1'>Selesai</h6>
          </div>
        </div>
      </div>

      <div className='flex flex-col mt-32 mb-10 ml-28 gap-11 w-[60%]'>
        <div className='flex flex-col gap-10'>
          <h2 className='font-bold text-5xl leading-text2 tracking-text1 text-purple700'>Buat jurnal</h2>
          <MoodInput/>
        </div>
        <div className='flex justify-end gap-5'>
          <Button 
            classname='border-2 border-purple500 py-3 px-6 text-purple500 rounded-2xl text-xl flex gap-2 w-56 justify-center items-center leading-text1 tracking-text1 hover:bg-purple500 hover:text-white'
            isRedirect={true} redirectTo="/tambah-journal"
          >Sebelumnya</Button>
          <Button 
            classname='bg-purple500 hover:bg-purple700 py-3 px-6 text-white rounded-2xl text-xl flex gap-2 w-56 justify-center items-center leading-text1 tracking-text1'
            isRedirect={true} redirectTo="/tambah-journal3"
          >Selanjutnya</Button>
        </div>
      </div>
    </div>
  )
}

export default TambahJournal2;
