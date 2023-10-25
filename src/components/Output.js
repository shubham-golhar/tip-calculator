import React from "react";

const Output = ({ bill, tip }) => {
  return (
    <div>
      you pay total ${bill + tip} (${bill} + ${tip}tip )
    </div>
  );
};

export default Output;
