import React from "react";


function ReviewsContainer({showReviews}) {
  return (
    <div className="reviews-container">
       <button onClick={showReviews}>SHOW REVIEWS</button>
    </div>
  );
}

export default ReviewsContainer;