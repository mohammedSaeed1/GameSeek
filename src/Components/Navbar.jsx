import {NavLink } from 'react-router-dom';
import mainLogo from '../assets/logo-sm.png';
import wraper from '../assets/wraper.png';

export default function Navbar() {
  return  <>
    <img src={wraper} alt="game img" className='opacity-100 object-cover bg-[#2A2E33] w-full h-62.5'/>
   <nav className="bg-[#3A497B] p-4 flex justify-between items-center w-3/4 mx-auto -mt-9 rounded-2xl shadow-2xl">
       <div className='flex items-center gap-x-2'>
         <img src={mainLogo} alt="mainLogo GameSeek" className='w-10' />
         <h1 className='text-white text-2xl'>GameSeek</h1>
       </div>
        <ul className='flex gap-2'>
            <NavLink to={'/mmorpg'}><li className="text-white">mmorpg</li></NavLink>
            <NavLink to={'/shooter'}><li className="text-white">shooter</li></NavLink>
            <NavLink to={'/sailing'}><li className="text-white">sailing</li></NavLink>
            <NavLink to={'/permadeath'}><li className="text-white">permadeath</li></NavLink>
            <NavLink to={'/superhero'}><li className="text-white">superhero</li></NavLink>
            <NavLink to={'/pixel'}><li className="text-white">pixel</li></NavLink>
           
        </ul>

    </nav>
  
  </>
}
