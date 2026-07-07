import { FaFacebook, FaInstagram, FaLine } from 'react-icons/fa';
import logo from './assets/logos/nexora-logo.png'
import { PiCaretCircleDoubleRight } from "react-icons/pi";
import { FaXTwitter } from 'react-icons/fa6';
const App = () => {
  return (
    <div className=" flex min-w-screen overflow-x-hidden min-h-screen ">
      {/* left side */}
      <div className='w-[65%] h-screen overflow-auto bg-primary-bg p-2'>
        <div className='flex items-center text-focus-text font-limelight '>
          <img
            src={logo}
            alt="Nexora logo"
            className='w-20'
          />
          <h1 className='text-3xl tracking-wide'>Nexora</h1>
        </div>
        <div className='p-8'>
          <div className='flex flex-col items-end'>
            <p className='text-dim-text font-inter  text-justify tracking-wide'>
              Nexora is a next-generation e-commerce platform built for the modern shopper. We combine cutting-edge technology with a human-centered shopping experience, delivering a curated selection of products from thousands of verified sellers across more than fifty countries.Our intelligent recommendation engine learns your preferences over time, surfacing products you'll actually love — not just the ones with the biggest ad budget. Every visit gets smarter. Every browse feels personal.Join the thousands already building their stores and discovering products on Nexora. The future of e-commerce isn't coming — it's here. And it's built for you.
            </p>
            <button className='transition-all duration-150 bg-button-bg text-white px-4 py-2 gap-2 mt-6 rounded-full cursor-pointer shadow-md shadow-button-bg/50 hover:shadow-button-bg/20 hover:shadow-xl active:text-white/50 flex items-center'>
              Join Us
              <PiCaretCircleDoubleRight className='text-xl' />
            </button>
          </div>
          <div className='mt-4'>
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
      {/* right side */}
      <div className='w-[35%] right-bg'>

      </div>
    </div>
  )
}

export default App
