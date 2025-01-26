import { useTheme } from "../context/ThemeContext";

function Nav() {
  const { changeTheme } = useTheme();

    return (
      <header className="fixed top-0 left-0 w-full p-4 text-white flex justify-between items-center" style={{ backgroundColor: "var(--bg-color)"}}>
        <nav>
        <h1 className="text-xl font-bold" style={{ color: "var(--headingOne-color)"}}>Mi portfolio</h1>
        <select name="themes" id="themes" onChange={(e) => changeTheme(e.target.value)} className="p-2 border rounded-md" style={{ borderColor: "var(--border-color)", color: "var(--text-color)"}}>
        <option value="light">claro</option>
        <option value="dark">oscuro</option>
        <option value="pastel">pastel</option>
        <option value="earthy">tierra</option>
        </select>
        </nav>
      </header>
    );
  }
  
  export default Nav;
  