import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ApplicationStatus from './pages/ApplicationStatus'
import NotFound from './pages/NotFound'
const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/application-status/:id' element={<ApplicationStatus />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
