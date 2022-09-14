import React ,{useState} from "react"


function Form({addReview}){
    const [restaurant_name, setRestaurant_name] = useState("");
    const [rating, setRating] = useState("");
    const [feedback, setFeedback] = useState("");

            function handleSubmit() {
                fetch("http://localhost:9292/reviews", {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                  },
                  body: JSON.stringify({
                    restaurant_name,
                    rating,
                    feedback,
                  }),
                })
                  .then((resp) => resp.json())
                  .then(resp => addReview(resp));
          
              }
        

    
      return(
        <div>
            <h1>Add a review</h1>
          <form  >
            <label>Restaurant Name: </label>
                <input type='text' value={restaurant_name} onChange={(e) => setRestaurant_name(e.target.value)}></input>
            <label>Rating(Out of 5):</label>
                <input type='integer' value={rating} onChange={(e) => setRating(e.target.value)}></input>
            <label >Feedback:</label>
                <textarea type='text' value={feedback} onChange={(e) => setFeedback(e.target.value)}></textarea> 
                <button onClick={handleSubmit}>SHARE REVIEW</button>
                 
            
          </form>
          
          
        </div>
      );
}
export default Form;

