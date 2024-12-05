import React from 'react'
import SearchBar from '../components/comman/SearchBar'
import Cards from '../components/Home/Cards'
import { HomeCard } from '../constants/data'

const Home = () => {
  return (
    <div className='w-11/12 mx-auto my-8'>
      <SearchBar/>
        <div className='flex flex-wrap gap-6 mt-8'>
            {
                HomeCard?.map((card)=>(
                    <Cards key={card.id} data={card}/>
                ))
            }
        </div>
    </div>
  )
}

export default Home
