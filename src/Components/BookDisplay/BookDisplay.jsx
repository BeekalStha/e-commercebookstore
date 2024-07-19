import React, { useContext } from 'react'
import "./BookDisplay.css"
import { StoreContext } from '../../Context/StoreContext'
import BookItem from '../BookItem/BookItem'
import { book_list } from '../../assets/assets'


const BookDisplay = ({category}) => {

    const {books} = useContext(StoreContext)
  return (
    <div className='book_display mt-30px' id='book_display'>
        <h2>Top books near you.</h2>
        <div className='book-display-list'>
            {book_list.map((item,index)=>{
                if(category==="All" || category===item.category){

                    return <BookItem key={index} id={item._id} name={item.name} price={item.price} author={item.author} image={item.image}/>
                }
            }
            )}
        </div>

    </div>
  )
}

export default BookDisplay