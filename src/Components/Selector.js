import React from "react";

const Selector = ({ type, setType }) => {
  const handleSelectChange = (event) => {
    setType(event.target.value);
  };
  return (
    <div>
      <select onChange={handleSelectChange} className="form-select">
        <option value={type} selected>
          All
        </option>
        <option value="Cat">Cat</option>
        <option value="Dog">Dog</option>
        <option value="Rabbit">Rabbit</option>
      </select>
    </div>
  );
};

export default Selector;
