import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

function Button() {
  const [theme, setTheme] = useContext(ThemeDataContext);

  function changeTheme() {
    setTheme("Dark");
  }
  return (
    <div>
      <button onClick={changeTheme}>Change Theme {theme}</button>
    </div>
  );
}

export default Button;
