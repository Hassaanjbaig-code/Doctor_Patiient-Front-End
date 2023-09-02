import React from "react";

const CustumButton = ({ type, classname, handleClick, Write }) => {
  return (
    <button type={type} className={classname} onClick={handleClick}>
      {Write}
    </button>
  );
};

export default CustumButton;
