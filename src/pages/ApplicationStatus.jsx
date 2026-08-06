import { Link, useParams } from 'react-router-dom'
const ApplicationStatus = () => {

  const { id } = useParams()
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='  shadow-2xl shadow-black/25 rounded-2xl '>
        <div className='bg-divider-bg p-4 text-white rounded-t-2xl'>
          Application Status for ID
          <span className='font-bold'>#{id}</span>
        </div>
        <div className=' p-4'>
          <h1 className='text-xl flex-col items-center'>
            <div className='flex justify-center items-center my-6'>
              {/* indicator dot */}
              <div className=' w-14 h-14 bg-blue-200 rounded-full animate-pulse duration-300 flex items-center justify-center'>
                <div className=' w-10 h-10 bg-blue-400 rounded-full animate-pulse duration-500 flex items-center justify-center'>
                  <div className=' w-6 h-6 bg-blue-600 rounded-full duration-1000 animate-pulse'>

                  </div>
                </div>
              </div>
            </div>
            <div className='text-center'>
              Your Application is still Checking!
            </div>
          </h1>
          <div className='flex items-center gap-16 mt-8 bg-slate-100 p-2 rounded-xl text-black/60'>
            <p>John Doe</p>
            <p>John@gmail.com</p>
            <p>+123123123</p>
          </div>
          <div className='flex justify-center mt-4'>
            <Link to={"/"} className='bg-blue-500 text-white px-4 py-1 rounded-xl'> Go to Home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplicationStatus