import React from "react";

const BillInput = ({ bill, onSetbill }) => {
  return (
    <div>
      <label>How much was the bill amount?</label>
      <input
        type="text"
        placeholder="Enter bill amount"
        value={bill}
        onChange={(e) => onSetbill(+e.target.value)}
      />
    </div>
  );
};

export default BillInput;
