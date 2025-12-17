import {NavLink } from 'react-router-dom';
import mainLogo from '../assets/logo-sm.png';
import wraper from '../assets/wraper.png';
import useSpecificCategory from '../Hooks/useSpecificCategory';

export default function Navbar() {

    const {specificCategory} = useSpecificCategory();

    

  return  <>
    <img src={wraper} alt="game img" className='opacity-100 object-cover bg-[#2A2E33] w-full h-62.5'/>
   <nav className="bg-[#3A497B] p-4 flex justify-between items-center w-3/4 mx-auto -mt-9 rounded-2xl shadow-2xl">
       <div className='flex items-center gap-x-2'>
         <img src={mainLogo} alt="mainLogo GameSeek" className='w-10' />
         <h1 className='text-white text-2xl'>GameSeek</h1>
       </div>
        <ul className='flex gap-2'>
            <NavLink to={`mmorpg`} onClick={()=>{specificCategory('mmorpg')}}><li className="text-white">Mmorpg</li></NavLink>
            <NavLink to={`shooter`} onClick={()=>{specificCategory('shooter')}}><li className="text-white">Shooter</li></NavLink>
            <NavLink to={`sailing`} onClick={()=>{specificCategory('sailing')}}><li className="text-white">Sailing</li></NavLink>
            <NavLink to={`permadeath`} onClick={()=>{specificCategory('permadeath')}}><li className="text-white">Permadeath</li></NavLink>
            <NavLink to={`superhero`} onClick={()=>{specificCategory('superhero')}}><li className="text-white">Superhero</li></NavLink>
            <NavLink to={`pixel`} onClick={()=>{specificCategory('pixel')}}><li className="text-white">Pixel</li></NavLink>
        </ul>

    </nav>
  
  </>
}
