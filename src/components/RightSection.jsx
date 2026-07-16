import { FaFacebook, FaInstagram, FaLine } from 'react-icons/fa';
import logo from '../assets/logos/nexora-logo.png'
import { PiCaretCircleDoubleRight } from "react-icons/pi";
import { FaXTwitter } from 'react-icons/fa6';
import ApplicationForm from './ApplicationForm';
import InquiryForm from './InquiryForm';
import PrivacyAndPolicy from './PrivacyAndPolicy';
import CustomButton from './CustomButton';


const RightSection = ({ applicationFormRef, inquiryFormRef, privacyRef, scrollToDiv }) => {

  return (

    <div className='w-[65%]  overflow-auto bg-primary-bg ' >

      <div className='flex items-center text-focus-text font-limelight px-10'>
        <img
          src={logo}
          alt="Nexora logo"
          className='w-20'
        />
        <h1 className='text-3xl tracking-wide'>Nexora</h1>
      </div>
      <div className='mt-10 px-10'>
        <div className='flex flex-col'>
          <div className='text-dim-text font-inter tracking-wide'>
            <p className='text-xl font-light border-l-6 border-button-bg pl-2'>Nexora is a next-generation e-commerce platform built for the modern shopper.</p>
            <p className='mt-4'>We combine cutting-edge technology with a human-centered shopping experience.</p>
          </div>
          <div className='flex justify-start mt-4'>
            <CustomButton
              text={"Join Us"}
              icon={<PiCaretCircleDoubleRight className='text-xl' />}
              onClick={() => scrollToDiv(applicationFormRef)}
            />

          </div>
        </div>
        <div className='mt-10'>
          <h2 className='text-2xl font-limelight'>MileStone</h2>
          <div className='text-dim-text mt-2'>
            <div>
              🚀 200+ Store Joined
            </div>
            <div>
              📦 15000+ Products Listed
            </div>
            <div>
              🛒 50000+ Orders Completed
            </div>
          </div>
        </div>
        <div>
          <h2 className='font-limelight text-2xl mt-10'>
            About Us
          </h2>
          <p className='text-dim-text mt-2 '>
            We are a modern e-commerce platform dedicated to connecting customers with trusted sellers through a secure and convenient shopping experience. Our mission is to make online shopping simple, reliable, and accessible by offering a wide range of quality products, competitive prices, and efficient delivery services.
          </p>
        </div>
        <div>
          <h2 className='font-limelight text-2xl mt-10'>
            Social Platform
          </h2>
          <div className='flex justify-between items-center'>
            <div className='flex gap-2 text-2xl mt-2 text-dim-text'>
              <a href="https://google.com" target='_blank' referrerPolicy='no-referrer' rel='noopener'>
                <FaFacebook className='hover:text-focus-text cursor-pointer' />
              </a>
              <FaInstagram className='hover:text-focus-text cursor-pointer' />
              <FaXTwitter className='hover:text-focus-text cursor-pointer' />
              <FaLine className='hover:text-focus-text cursor-pointer' />
            </div>
            <CustomButton
              text={"Visit our website"}
              extraClass={"h-10"}
            />

          </div>
        </div>

      </div>

      <InquiryForm
        formRef={inquiryFormRef}
      />
      <ApplicationForm
        formRef={applicationFormRef}
      />
      <PrivacyAndPolicy
        formRef={privacyRef}
      />
    </div >



  )
}

export default RightSection