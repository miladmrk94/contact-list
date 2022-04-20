import React from "react";
const FilterContact = ({ onChange }) => {
  return (
    <div>
      <input placeholder="search contact..." onChange={onChange} />
    </div>
  );
};

export default FilterContact;
