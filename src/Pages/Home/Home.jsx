import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import BookDisplay from '../../Components/BookDisplay/BookDisplay'

const Home = () => {

  const [category,setCategory] = useState("All");
  return (
    <div>
       <Header/>
       <ExploreMenu category={category} setCategory={setCategory}/>
       <BookDisplay category={category} />
    </div>
  )
}

export default Home