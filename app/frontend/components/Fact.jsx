import React from 'react';
import "./container.css";

const Fact = ({fact}) => {
  return (
    <div className="cell small-4 card">
      {fact.text}
    </div>
  )
}

export default Fact;