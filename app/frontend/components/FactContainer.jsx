import React from "react";

const FactContainer = ({children}) => {
  return (
    <div className="grid-x grid-padding-x align-around">
      {children}
    </div>
  )
};

export default FactContainer;