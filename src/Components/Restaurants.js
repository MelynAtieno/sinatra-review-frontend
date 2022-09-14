import React from "react";

function Restaurants({showRestaurants}){
    
      
    return (
          <div>
            <button className="resbtn" onClick={showRestaurants}>SHOW RESTAURANTS</button>
          </div>
    
        );
      }
   

export default Restaurants;