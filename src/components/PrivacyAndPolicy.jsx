import contract from '../assets/images/contract.svg'
const PrivacyAndPolicy = ({ formRef }) => {
  return (
    <div className="min-h-screen bg-divider-bg mt-10 p-10 flex flex-col items-center" ref={formRef}>
      <img
        src={contract}
        alt=""
        className='w-40'
      />
      <h1 className="text-white text-center text-xl underline  mt-10">
        Privacy And Policy
      </h1>
    </div>
  )
}

export default PrivacyAndPolicy