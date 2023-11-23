import React, { useEffect, useState } from "react";
import { FaCog } from "react-icons/fa";
import { colorThemes } from "../../PersonalData";
import "./changeColorTheme.css";
import ChangeColorThemeItem from "./ChangeColorThemeItem";

const getStorageColor = () => {
  let color = "rgb(48, 178, 98)";
  if (localStorage.getItem("color")) {
    color = localStorage.getItem("color");
  }
  return color;
};

const ChangeColorTheme = () => {
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [color, setColor] = useState(getStorageColor());

  const changeColor = (color) => {
    setColor(color);
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--main-color", color);
    localStorage.setItem("color", color);
  }, [color]);

  return (
    <div
      className={`${
        showSwitcher ? "show-color__switcher" : ""
      } color__switcher`}
    >
      <div
        className="color__switcher-toggler"
        onClick={() => setShowSwitcher(!showSwitcher)}
      >
        <FaCog />
      </div>

      <h3 className="color__switcher-title">Choose The Color!</h3>
      <div className="color__switcher-items">
        {colorThemes.map((colorTheme, index) => {
          return (
            <ChangeColorThemeItem
              key={index}
              {...colorTheme}
              changeColor={changeColor}
            />
          );
        })}
      </div>

      <div
        className="color__switcher-close"
        onClick={() => setShowSwitcher(!showSwitcher)}
      >
        &times;
      </div>
    </div>
  );
};

export default ChangeColorTheme;
