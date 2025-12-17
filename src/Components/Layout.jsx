import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import SpecificCategory from './SpecificCategory'

export default function Layout() {
  return <>
      <Navbar/>
      <section className='w-[85%] mx-auto'>
      <Outlet/>
      </section>
  </>
}
