import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Layout() {
  return (
    <>  
        <Navbar />
        <div class="wrapper" style={{flex: 1}}>
            <Outlet />
        </div>
        <Footer />
    </>
  )
}
