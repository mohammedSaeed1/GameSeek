import React, { useEffect} from 'react'
import useSpecificCategory from '../Hooks/useSpecificCategory';
import { Link, useParams } from 'react-router-dom';
 
export default function SpecificCategory() {

  const {specificCategory , specificCategoryData} = useSpecificCategory();
  const {category} =  useParams();
   
  
  useEffect(() => {  
  specificCategory(category);
  }, [category])

 return <>
    <header>
      <h1 className=' text-blue-400 text-3xl text-center mt-10 mb-5 font-serif'>{category} Games</h1>
      <section className='flex flex-wrap px-5'>
        {specificCategoryData.map(game =>
          <div key={game.id} className=' w-1/4 px-3 py-4  rounded-lg border-2 border-[#333] hover:border-blue-600 mb-5'>
           <Link to={`/GameDetails/${game.id}`}>
              <img src={game.thumbnail} alt={game.title} className='w-full'/>
              <div className='flex justify-between items-center'>
              <h2 className='text-white font-medium mt-2 inline'>{game.title}</h2>
              <button className='text-white bg-blue-600 px-2 py-0.5 rounded-md'>Free</button> 
              </div>
              <p className='text-[#7E8184] mt-1 text-center '>{game.short_description.slice(0,70)}</p>
              <div className='mt-1 flex justify-between items-center border-t-2 border-[#333] pt-1.5'>
                <h4 className='text-white'>{game.genre}</h4>
                <h5 className='text-white'>{game.platform}</h5>
              </div>
              <h6 className='text-[#7E8184]'>Release Date : {game.release_date}</h6>
        </Link>
        </div>
)}
      
      </section>

    </header>
  
  </>
}


