'use client';
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useState } from "react";


const themes = {
    cmyk: "cmyk",
    night: "night",
  };

const ThemeToggle = () => {
    const [theme, setTheme] = useState(themes.cmyk);

    const toggleTheme = () => {
        const newTheme = theme === themes.cmyk ? themes.night : themes.cmyk;
        document.documentElement.setAttribute("data-theme", newTheme);
        setTheme(newTheme);
    };


    return (
        <button className="btn  btn-sm btn-outline " onClick={toggleTheme}>
            {theme === "cmyk "? (<BsMoonFill className="h-4 w-4" />
            ) : (
                <BsSunFill className="h-4 w-4" />
            )}
        </button>
    );
}
export default ThemeToggle;

