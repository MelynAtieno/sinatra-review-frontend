import './App.css';
import React, {useState, useEffect} from 'react';
import Form from "./Components/Form";
import Review from './Components/Review';
import Restaurants from './Components/Restaurants';
import ReviewsContainer from './Components/ReviewsContainer';


function App() {
  
  const [allReviews,setReviews] = useState([])

  useEffect(()=>{
    fetch("http://localhost:9292/reviews")
    .then(resp => resp.json())
    .then(reviews => setReviews(reviews))
},[])

  function addReview(review){
    setReviews([...allReviews, review])

    fetch("http://localhost:9292/reviews",{
      method: "POST",
            headers:{
                "content-type" : "application/json",
                "accept" : "application/json"
            },
            body: JSON.stringify(review)
    })
    .then(resp => resp.json())
        .then(resp => addReview(resp))
}

function deleteReview({id}){
  fetch(`http://localhost:9292/reviews/${id}/delete`,{
      method: 'DELETE'
  })
      .then(resp => resp.json())
      .then()
}

function showRestaurants(){
  fetch("http://localhost:9292/restaurant",{
            method: "GET",
            headers:{
                "content-type" : "application/json",
                "accept" : "application/json"
            },
            body: JSON.stringify()
        })
        .then(resp => resp.json())
        .then(resp => showRestaurants(resp))
}

function showReviews(){
  fetch("http://localhost:9292/reviews",{
            method: "GET",
            headers:{
                "content-type" : "application/json",
                "accept" : "application/json"
            },
            body: JSON.stringify()
        })
        .then(resp => resp.json())
        .then(resp => showReviews(resp))
}

return (
    <div className="App">
      <div className='sidebar'>
      <header className="App-header">
      
        <h1>Review and give feedback on your favorite restaurants!!!</h1>
        
      </header>
      
      <Form addReview= {addReview}/>
      
      <ReviewsContainer showReviews={showReviews}/>

      <Review deleteReview={deleteReview}/>
      
      <Restaurants showRestaurants={showRestaurants}/>
      
</div>
  
</div>

);
}

export default App;
