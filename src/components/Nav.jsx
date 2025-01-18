function Nav({ darkMode, setDarkMode }) {
    return (
      <header className="fixed top-0 left-0 w-full bg-gray-800 p-4 text-white flex justify-between items-center">
        <h1 className="text-xl font-bold">Mi portfolio</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-600 px-4 py-2 rounded-lg"
        >
          {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
        </button>
      </header>
    );
  }
  
  export default Nav;
  