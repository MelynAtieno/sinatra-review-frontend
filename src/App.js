import './App.css';
import React, { useState, useEffect } from 'react';
import Form from "./Components/Form";

import ReviewsContainer from './Components/ReviewsContainer';
import UpdateReview from "./Components/UpdateReviews"


function App() {
  const [allReviews, setReviews] = useState([])
  

  useEffect(() => {
    fetch("http://localhost:9292/reviews")
      .then(resp => resp.json())
      .then(reviews => setReviews(reviews))
  }, [])

  function addReview(review) {
    setReviews([...allReviews, review])

    fetch("http://localhost:9292/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(review)
    })
      .then(resp => resp.json())
      .then(resp => addReview(resp))
  }
 

  function deleteReview(id) {
    fetch(`http://localhost:9292/reviews/${id}`, {
      method: 'DELETE'
    })
      .then(() => { showReviews()})
      
    
  }

  function showReviews(e) {
    e.preventDefault()
    fetch("http://localhost:9292/reviews")
      .then(resp => resp.json())
      .then(resp => showReviews(resp))
  }

  function handleUpdate(onUpdateReview, review){
    
    fetch (`http://localhost:9292/reviews/${review.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            
        }),
    })
        .then((resp) => resp.json())
        .then ((updatedReview) => onUpdateReview(updatedReview))
    
}


  return (
    <div className="App">
      <div className='sidebar'>
        <header className="App-header">
          <h1>Review and give feedback on your favorite restaurants!!!</h1>
        </header>

        <Form addReview={addReview} />
      </div>
      <div className='reviewscontainer'>
        <ReviewsContainer showReviews={showReviews} />
        <ul> {allReviews.map(review => {
          return (
            <div className='form1'>
              <p><b>Restaurant Name:</b> {review.restaurant_name}</p>
              <p><b>Rating:</b> {review.rating}</p>
              <p><b>Feedback:</b> {review.feedback}</p>
              <span className='buttons'>
              <button className='delbtn' onClick={() => deleteReview(review.id)}>DELETE</button>
              <div>
              <UpdateReview handleUpdate = {handleUpdate}/>
              
              
         
      </div>
      </span>
            </div>
          )
        })}
        </ul>
      </div>
    </div>
  );
}

export default App;

//Review deleteReview={deleteReview} 
//<UpdateReview updateReview={updateReview} />