import { useEffect, useState} from 'react'
import useSpecificCategory from '../Hooks/useSpecificCategory';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading';
import {Helmet} from 'react-helmet-async';
 
export default function SpecificCategory() {

  const {specificCategory , specificCategoryData , loading} = useSpecificCategory();
  const {category} =  useParams();
  const [allGames, setAllGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const gamesToDisplay = category ? specificCategoryData : allGames;
  
  
  function getAllGames(){
    axios.get(`https://corsproxy.io/?https://www.freetogame.com/api/games`)
    .then(response => {
      setAllGames(response.data);
      setIsLoading(false);
    })
  }
  
  useEffect(() => {  
    category ? specificCategory(category) :getAllGames();
  }, [category])



 return <>
   
   <Helmet>
      <title>{category ? `${category} Games - GameSeek` : 'All Games - GameSeek'}</title>
      <meta name="description" content={category ? `Explore the best free-to-play ${category} games on GameSeek. Discover exciting adventures, thrilling action, and immersive gameplay in our curated selection of top-rated ${category} titles.` : 'Discover a vast collection of free-to-play games on GameSeek. From action-packed shooters to immersive RPGs, find your next favorite game and dive into endless fun without spending a dime.'} />
      <meta name="keywords" content={category ? `${category} games, free ${category} games, online ${category} games, multiplayer ${category} games` : 'free games, online games, multiplayer games, RPG games, shooter games, strategy games'} />
   </Helmet>
   


 {isLoading && loading ? <Loading/> : <header>
  <h1 className='text-blue-400 text-4xl text-center mt-10 mb-8 font-bold capitalize'>{category}  Games</h1>
  <section className='flex flex-wrap px-5 gap-5'>
    {gamesToDisplay?.map(game => (
      <Link 
        key={game.id} 
        to={`/GameDetails/${game.id}`}
        className='w-full md:w-[47%] lg:w-[23%] bg-[#1a1a2e] rounded-lg border-2 border-[#333] hover:border-blue-600 hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden'
      >
        <div className='relative'>
          <img src={game?.thumbnail} alt={game?.title} className='w-full h-48 object-cover'/>
          <span className='absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold'>Free</span>
        </div>
        
        <div className='p-4'>
          <h2 className='text-white font-bold text-lg mb-2 line-clamp-1 hover:text-blue-400 transition-colors'>{game?.title}</h2>
          <p className='text-gray-400 text-sm mb-3 h-12 line-clamp-2'>{game?.short_description}</p>
          <div className='flex justify-between items-center border-t border-[#333] pt-3 mb-2'>
            <span className='text-xs bg-purple-600 text-white px-2 py-1 rounded'>{game?.genre}</span>
            <span className='text-xs bg-green-600 text-white px-2 py-1 rounded'>{game?.platform}</span>
          </div>          
          <p className='text-gray-500 text-xs'>📅 Realsed at : {game?.release_date}</p>
        </div>
      </Link>
    ))}
  </section>
</header>
 }

    
  
  </>
}


