import React from 'react'
import SearchBar from '../components/comman/SearchBar'
import Cards from '../components/Home/Cards'
import { HomeCard } from '../constants/data'
import { TreeHouses } from '../constants/data'
import CustomCards from '../components/Home/CustomCards.jsx'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const location=useLocation();
  console.log("localtion",location);
  const {pathname}=location; 
  return (
    <div className='w-11/12 mx-auto my-8'>
      <SearchBar/>
        <div className='flex flex-wrap mt-8 gap-6'>
          {
            pathname==='/TreeHouses'? HomeCard?.map((card)=>(
              <Cards key={card.id} data={card}/>
          )): 
            TreeHouses?.map((card)=>(
              <CustomCards key={card.id} data={card}/>
        ))
      }
        </div>
        
    </div>
  )
}

export default Home
