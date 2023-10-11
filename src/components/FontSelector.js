import React from "react";

function FontSelector({ onFontChange ,selectedFont ,selectedColor}) {
  const handleFontChange = (e) => {
    const selectedFont = e.target.value;
    onFontChange(selectedFont);
  };
 const color = localStorage.getItem("selectedColor");


  return (
    <div className="font-selector" style={{
      color: selectedColor,
    }}>
      {/* <label htmlFor="fontSelect">Select Font:</label> */}
      <select id="fontSelect"  style={{
      fontFamily: selectedFont,
      color:selectedColor,
    }} onChange={handleFontChange}>
      <option value="" disabled selected>
          Select Font
        </option>
        <option value="Arial">Arial</option>
        <option value="Lobster">Lobster</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Verdana">Verdana</option>
        <option value="asap">Asap</option>
        

        {/* Add more font options as needed */}
      </select>
    </div>
  );
}

export default FontSelector;
