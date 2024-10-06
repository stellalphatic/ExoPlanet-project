import React from 'react';

const HabitabilityBar = ({ habitability }) => {
  const getBarColor = () => {
    if (habitability >= 75) {
      return '#4caf50'; // Green for high habitability
    } else if (habitability >= 50) {
      return '#ffeb3b'; // Yellow for medium habitability
    } else if (habitability >= 25) {
      return '#ff9800'; // Orange for low habitability
    } else {
      return '#f44336'; // Red for very low habitability
    }
  };

  return (
    <div className="habitability-bar">
      <div
        className="habitability-bar__fill"
        style={{
          width: `${habitability}%`,
          backgroundColor: getBarColor(),
        }}
      ></div>
      <span className="habitability-bar__label">{habitability}%</span>
    </div>
  );
};

export default HabitabilityBar;
