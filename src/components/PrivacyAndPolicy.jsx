import contract from '../assets/images/contract.svg'
import { privacyPolicy } from '../constants'
const PrivacyAndPolicy = ({ formRef }) => {
  return (
    <div className="min-h-screen bg-divider-bg mt-10 md:p-10 p-4 flex flex-col items-center pb-20" ref={formRef}>

      <h1 className="text-white text-center text-xl underline ">
        Privacy And Policy
      </h1>
      <img
        src={contract}
        alt=""
        className='w-40 mt-10'
      />
      <div className='mt-10'>
        {
          privacyPolicy.map((item, index) => (
            <div key={index + item.title} className={`${index !== privacyPolicy.length - 1 ? "border-b border-white/10 mb-4 pb-4" : ""}`}>
              <h1 className='text-white text-lg px-4'>
                {item.title}
              </h1>
              <p className='text-white/90 px-8 py-2 text-justify '>
                {item.description}
              </p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default PrivacyAndPolicy