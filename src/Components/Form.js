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
            <h3>Add a review</h3>
          <form  >
            <label><b>Restaurant Name: </b></label>
                <input type='text' value={restaurant_name} onChange={(e) => setRestaurant_name(e.target.value)}></input>
            <label><b>Rating(Out of 5):</b></label>
                <input type='integer' value={rating} onChange={(e) => setRating(e.target.value)}></input>
            <label ><b>Feedback:</b></label>
              <textarea className="textarea" type='text' value={feedback} onChange={(e) => setFeedback(e.target.value)}></textarea> 
              <button className="formbutton" onClick={handleSubmit}>ADD REVIEW</button>
            </form>
           
          
          
        </div>
      );
}
export default Form;

