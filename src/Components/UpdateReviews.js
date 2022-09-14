import React from "react";

function UpdateReview({review, onUpdateReview}){
   

    function handleUpdate(e){
        e.preventDefault();
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
           <div>
            <button onClick={handleUpdate}>UPDATE</button>
           </div> 
        )


}

export default UpdateReview;