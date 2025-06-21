import { useTheme } from "../../hooks/useTheme";

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="inline-flex items-center justify-evenly gap-0.5 bg-black/30 backdrop-blur-md rounded-lg p-0.5 border border-white/10 shadow-lg">
      <button
        onClick={() => setTheme("light")}
        className={`
          flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-md 
          transition-all duration-300 ease-out transform hover:scale-105 active:scale-95
          ${
            theme === "light"
              ? "bg-white/90 text-gray-800 shadow-md scale-105"
              : "text-white/70 hover:text-white hover:bg-white/15"
          }
        `}
        title="Switch to Light Mode"
      >
        <span className="text-sm leading-none">☀️</span>
        <span className="font-semibold leading-none">Light</span>
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`
          flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-md 
          transition-all duration-300 ease-out transform hover:scale-105 active:scale-95
          ${
            theme === "dark"
              ? "bg-white/90 text-gray-800 shadow-md scale-105"
              : "text-white/70 hover:text-white hover:bg-white/15"
          }
        `}
        title="Switch to Dark Mode"
      >
        <span className="text-sm leading-none">🌙</span>
        <span className="font-semibold leading-none">Dark</span>
      </button>
    </div>
  );
}

export default ThemeSwitch;
