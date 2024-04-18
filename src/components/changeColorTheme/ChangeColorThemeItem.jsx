import React from "react";

const ChangeColorThemeItem = ({ color, img, changeColor }) => {
  return (
    <img
      src={img}
      alt="different colors"
      className="colorTheme-img"
      onClick={() => {
        changeColor(color);
      }}
    />
  );
};

export default ChangeColorThemeItem;
