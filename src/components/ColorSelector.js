import React from "react";

function ColorSelector({ onColorChange ,selectedFont , selectedColor}) {
  const handleFontChange = (e) => {
    const selectedFont = e.target.value;
    onColorChange(selectedFont);
  };

  const color = localStorage.getItem("selectedColor");
 const font =  localStorage.getItem("selectedFont") ;

  return (
    <div className="font-selector ColorSelector" style={{
        color: selectedColor,
      }}>
      {/* <label htmlFor="fontSelect">Select Font:</label> */}
      <select id="fontSelect"  style={{
      color: selectedColor,
      fontFamily: selectedFont,
    }} onChange={handleFontChange}>
      <option value="" disabled selected>
          Select Color
        </option>
        <option value="white">White</option>
        <option value="black">Black</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="purple">Purple</option>
        <option value="yellow">Yelllow</option>
        

        {/* Add more font options as needed */}
      </select>
    </div>
  );
}

export default ColorSelector;
