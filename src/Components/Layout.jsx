import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout() {
  return <>
      <Navbar/>
      <section className='sm:w-[85%] mx-auto'>
      <Outlet/>
      </section>
  </>
}
