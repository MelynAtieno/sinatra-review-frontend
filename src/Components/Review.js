import React from 'react'

function Review({review, deleteReview}){

  function onDeleteClick(id){
    

  fetch(`http://localhost:9292/reviews/${review.id}`, {
    method: 'DELETE',
  })
  .then((resp) =>resp.json())
  .then((deletedReview) => deleteReview(deletedReview))
  
}

  return(
      <div>
          <button className='delbtn' onClick = {onDeleteClick}>DELETE</button>
      </div>
          
      
  )
}


    

export default Review;