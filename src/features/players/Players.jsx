// Import the React library
import React from "react";

// Import the generated hook from our RTK Query API slice
import { useGetPlayerQuery } from "../../api/puppyBowlApi";

// Import the CSS styles for this component
import "../../index.css";

// Define a new React component
const Players = () => {
  // Use the generated hook to fetch data from the API
  // When the component is first rendered, it will start the API fetch
  // It will re-render each time the fetch status changes (e.g., "loading", "data arrived", "error")
  const { data = {}, error, isLoading } = useGetPlayerQuery();
  
  // Show a loading message while data is being fetched
  if (isLoading) {
    return <p>Loading Puppies...</p>
  }

  // Show an error message if the fetch failed
  if (error) {
    return <p>Something went wrong! Please try again!</p>,
    console.log(error)
  }

  // Show the fetched data after it has arrived
  return (
    <div className="players">
      <h1>Welcome to the Puppy Bowl Event!</h1>
      <h3>Get ready to meet the talented puppies in this years Puppy Bowl!</h3>
      {/* Map through the data array and generate a div for each player */}
      {data.data.players.map((player) => (
        // Use the player's ID as the key for this div
        <div key={player.id} className="player-card">
          {/* Display the player's image, with the player's name as alt text */}
          {player.id.imageUrl}
          {player.id.name}
          <div className="player-details">
            
            <h2>  {player.id.name} </h2> 
            
            <p>  {player.id.breed} </p> 
            
            <p> {player.id.status} </p>
          </div>
        </div>
      ))}
    </div>
  );
};
// Export the component so it can be imported and used in other files
export default Players;
