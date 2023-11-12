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
      <div className="dark_mode">
        <input
          className="dark_mode_input"
          type="checkbox"
          id="darkmode-toggle"
        />
        <label
          className="dark_mode_label"
          for="darkmode-toggle"
          onClick={toggleTheme}
        >
          {theme === "dark-theme" ? <Sun /> : <Moon />}
        </label>
      </div>
    </div>
  );
};

export default Theme;
