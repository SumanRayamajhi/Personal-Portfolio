import React, { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import { ReactComponent as Sun } from "../../../assets/images/Sun.svg";
import { ReactComponent as Moon } from "../../../assets/images/Moon.svg";
import "./theme.css";

const getStorageTheme = () => {
  let theme = "dark-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const Theme = () => {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      <div className="light_mode">
        <input
          className="light_mode_input"
          type="checkbox"
          id="lightmode-toggle"
        />
        <label
          className="light_mode_label"
          for="lightmode-toggle"
          onClick={toggleTheme}
        >
          {theme === "light-theme" ? <Moon /> : <Sun />}
        </label>
      </div>
    </div>
  );
};

export default Theme;
