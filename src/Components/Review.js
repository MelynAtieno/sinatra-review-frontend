import React from 'react'

function Review(review, deleteReview){

  return(
      <div>
          <button className='delbtn' onClick = {() => deleteReview(review.id)}>DELETE</button>
      </div>
          
      
  )
}


    

export default Review;