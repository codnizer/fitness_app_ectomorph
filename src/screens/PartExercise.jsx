import React from 'react';
import workouts from '../data/workouts.js';

const PartExercise = () => {
  const myworkout = workouts.chest;

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={myworkout[3].image}
            alt={myworkout[0].name}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{myworkout[3].name}</h2>
          {/* <p>Target muscles: {myworkout[0].target.join(', ')}</p> */}
          {/* <p>Synergistic muscles: {myworkout[0].syner.join(', ')}</p> */}
          <div className="card-actions">
            <button className="btn btn-primary">Start Workout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartExercise;
