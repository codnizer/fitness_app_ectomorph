import React from 'react';
import workouts from '../data/workouts.json';
 

// Dynamically load all images in the chest folder
 
const PartExercise = () => {
  let myworkout = workouts.workouts.chest;

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            // Use the imported images and map the JSON path to the loaded images
            src={myworkout[0].image}
            alt={myworkout[0].name}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{myworkout[0].name}</h2>
          <p>Target muscles: {myworkout[0].target.join(', ')}</p>
          <p>Synergistic muscles: {myworkout[0].syner.join(', ')}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Start Workout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartExercise;
