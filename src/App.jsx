import { FaFacebook, FaInstagram, FaLine } from 'react-icons/fa';
import logo from './assets/logos/nexora-logo.png'
import { PiCaretCircleDoubleRight } from "react-icons/pi";
import { FaXTwitter } from 'react-icons/fa6';
import rightbg from './assets/images/right-bg.png'
import { RiCustomerService2Fill } from 'react-icons/ri';
import { IoDocumentOutline } from 'react-icons/io5';
const App = () => {
  const currentYear = new Date().getUTCFullYear().toString()

  return (
    <div className=" flex relative justify-end min-w-screen overflow-x-hidden min-h-[200vh] ">
      {/* right side */}
      <div className='w-[35%] fixed top-0 left-0'>
        <img
          src={rightbg}
          alt=""
        />
        <div className='w-full h-full bg-black/70 absolute top-0 text-white flex flex-col justify-center items-center'>
          <p className='text-2xl font-light'>Sell on our e-commerce platform!</p>
          <div className='flex gap-2 mt-4'>
            <button className='transition-all duration-150 bg-button-bg px-6 py-1 cursor-pointer rounded-full flex justify-center items-center  gap-2 shadow-md shadow-white/20 hover:shadow-white/10 hover:shadow-xl active:text-white/50'>
              Inquiry
              <RiCustomerService2Fill className='text-xl' />
            </button>
            <button className='transition-all duration-150 border-2 border-button-bg backdrop-blur-xl px-6 py-1 cursor-pointer rounded-full flex justify-center items-center gap-2 shadow-md shadow-white/20 hover:shadow-shadow/10 hover:shadow-xl active:text-white/50'>
              Apply
              <IoDocumentOutline className='text-xl' />
            </button>
          </div>
          <div className='mt-4 flex gap-2'>
            ©{currentYear} Nexora. All right reserved!
            <div className='font-bold text-white/60 underline cursor-pointer'>Privacy & Policy</div>
          </div>
        </div>
      </div>
      {/* left side */}
      <div className='w-[65%] h-screen  overflow-auto bg-primary-bg p-2'>
        <div className='flex items-center text-focus-text font-limelight '>
          <img
            src={logo}
            alt="Nexora logo"
            className='w-20'
          />
          <h1 className='text-3xl tracking-wide'>Nexora</h1>
        </div>
        <div className='p-8'>
          <div className='flex flex-col'>
            <div className='text-dim-text font-inter tracking-wide'>
              <p className='text-xl font-light border-l-6 border-button-bg pl-2'>Nexora is a next-generation e-commerce platform built for the modern shopper.</p>
              <p className='mt-4'>We combine cutting-edge technology with a human-centered shopping experience.</p>
            </div>
            <div className='flex justify-start mt-4'>
              <button className='transition-all  duration-150 bg-button-bg text-white px-4 py-2 gap-2 rounded-full cursor-pointer shadow-md shadow-button-bg/50 hover:shadow-button-bg/20 hover:shadow-xl active:text-white/50 flex items-center'>
                Join Us
                <PiCaretCircleDoubleRight className='text-xl' />
              </button>
            </div>
          </div>
          <div className='mt-10'>
            <h2 className='text-2xl font-limelight'>MileStone</h2>
            <p className='text-dim-text mt-2'>
              <div>
                🚀 200+ Store Joined
              </div>
              <div>
                📦 15000+ Products Listed
              </div>
              <div>
                🛒 50000+ Orders Completed
              </div>
            </p>
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
              <button className='bg-button-bg text-white px-4 py-2 rounded-full cursor-pointer shadow-md shadow-button-bg/50 hover:shadow-button-bg/20 hover:shadow-xl active:text-white/50'>
                Visit our website
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
