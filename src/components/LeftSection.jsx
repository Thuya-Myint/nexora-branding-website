import rightbg from '../assets/images/right-bg.png'
import { RiCustomerService2Fill } from 'react-icons/ri';
import { IoDocumentOutline } from 'react-icons/io5';
import CustomButton from './CustomButton';
const currentYear = new Date().getUTCFullYear().toString()
const LeftSection = ({ applicationFormRef, inquiryFormRef, privacyRef, scrollToDiv }) => {
  return (
    <>
      {/* right side */}
      <div className='w-[35%] fixed top-0 left-0'>
        <img
          src={rightbg}
          alt=""
        />
        <div className='w-full h-full bg-black/70 absolute top-0 text-white flex flex-col justify-center items-center'>
          <p className='text-2xl font-light'>Sell on our e-commerce platform!</p>
          <div className='flex gap-2 mt-4'>
            <CustomButton
              text={"Inquiry"}
              icon={<RiCustomerService2Fill className='text-xl' />}
              onClick={() => scrollToDiv(inquiryFormRef)}
            />
            <button className='transition-all duration-150 border-2 border-button-bg backdrop-blur-xl px-6 py-1 cursor-pointer rounded-full flex justify-center items-center gap-2 shadow-md shadow-white/20 hover:shadow-shadow/10 hover:shadow-xl active:text-white/50'
              onClick={() => scrollToDiv(applicationFormRef)}>
              Apply
              <IoDocumentOutline className='text-xl' />
            </button>
          </div>
          <div className='mt-4 flex gap-2'>
            ©{currentYear} Nexora. All right reserved!
            <div className='font-bold text-white/60 underline cursor-pointer'
              onClick={() => scrollToDiv(privacyRef)}
            >Privacy & Policy</div>
          </div>
        </div>

      </div>
    </>
  )
}

export default LeftSection