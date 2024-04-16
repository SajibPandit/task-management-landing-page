import React, { useState } from 'react';

function FilterMenu({ options, onSelect }) {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className='d-flex flex-column menu-bar'>
      {options.map((option, index) => (
        <button
          key={index}
          className={`menu-button ${option === selectedOption ? 'active' : ''}`}
          onClick={() => handleOptionSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default FilterMenu