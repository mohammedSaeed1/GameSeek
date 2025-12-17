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
  <h1 className='text-blue-400 text-4xl text-center mt-10 mb-8 font-bold capitalize'>
    {category} Games
  </h1>
  
  <section className='flex flex-wrap px-5 gap-5'>
    {specificCategoryData.map(game => (
      <Link 
        key={game.id} 
        to={`/GameDetails/${game.id}`}
        className='w-[calc(25%-1.25rem)] bg-[#1a1a2e] rounded-lg border-2 border-[#333] hover:border-blue-600 hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden'
      >
        <div className='relative'>
          <img 
            src={game.thumbnail} 
            alt={game.title} 
            className='w-full h-48 object-cover'
          />
          <span className='absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold'>
            Free
          </span>
        </div>
        
        <div className='p-4'>
          <h2 className='text-white font-bold text-lg mb-2 line-clamp-1 hover:text-blue-400 transition-colors'>
            {game.title}
          </h2>
          
          <p className='text-gray-400 text-sm mb-3 h-12 line-clamp-2'>
            {game.short_description}
          </p>
          
          <div className='flex justify-between items-center border-t border-[#333] pt-3 mb-2'>
            <span className='text-xs bg-purple-600 text-white px-2 py-1 rounded'>
              {game.genre}
            </span>
            <span className='text-xs bg-green-600 text-white px-2 py-1 rounded'>
              {game.platform}
            </span>
          </div>
          
          <p className='text-gray-500 text-xs'>
            📅 {game.release_date}
          </p>
        </div>
      </Link>
    ))}
  </section>
</header>
  
  </>
}


