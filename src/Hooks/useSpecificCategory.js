import React, { useState } from 'react'
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export default function useSpecificCategory() {


    const [specificCategoryData,setSpecificCategoryData] =useState([]);

  
  const query = useQuery({
    queryKey: ['specificCategory'],
    queryFn: () => specificCategory,
  })
 
  function specificCategory(category = 'shooter') {
    axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,{
      headers: {
        'x-rapidapi-key': 'c187b56313msh3696c416b07d42ep169befjsn46159e316f08',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
      }
    } ).then((response) => {
      console.log(response.data);
        setSpecificCategoryData(response.data);
    }).catch((error) => {
      console.error(error);
    });
  }
  
  
    return {query , specificCategory , specificCategoryData , setSpecificCategoryData};
}
