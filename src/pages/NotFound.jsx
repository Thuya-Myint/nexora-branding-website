import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className=' h-screen flex items-center justify-center gap-2 text-2xl '>
      <p className=''> 404 Page not found</p>
      <Link
        to="/"
        className='underline text-black/50 hover:text-black cursor-pointer'>
        back to home page
      </Link>
    </div>
  )
}

export default NotFound