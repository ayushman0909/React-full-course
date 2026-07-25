import { useContext } from "react";
import  ThemeContext from "../Context/ThemeContext";

const ThemeSwitcher = () => {
  const {theme,HandleDarkTheme,HandleLightTheme,HandleSystemTheme}=useContext(ThemeContext);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-100 rounded-3xl bg-white  dark:bg-black dark:text-white shadow-2xl p-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center">
          Theme Switcher {theme}
        </h2>

        <p className="text-center  mt-2">
          Select your preferred theme
        </p>

        {/* Theme Cards */}
        <div className="mt-8 space-y-4">
          {/* Light */}
          <button onClick={HandleLightTheme}  className="w-full flex items-center justify-between rounded-2xl border-2 border-slate-200 px-5 py-4 hover:border-yellow-400 transition">
            <div className="flex items-center gap-4">
              <span className="text-3xl">☀️</span>
              <div className="text-left">
                <h3 className="font-semibold ">
                  Light Theme
                </h3>
                <p className="text-sm ">
                  Bright and clean look
                </p>
              </div>
            </div>

            <div className="h-5 w-5 rounded-full border-2 border-slate-400"></div>
          </button>

          {/* Dark */}
          <button onClick={HandleDarkTheme} className="w-full flex items-center justify-between rounded-2xl border-2 border-slate-200 px-5 py-4 hover:border-blue-500 transition">
            <div className="flex items-center gap-4">
              <span className="text-3xl">🌙</span>
              <div className="text-left">
                <h3 className="font-semibold ">
                  Dark Theme
                </h3>
                <p className="text-sm ">
                  Perfect for night work
                </p>
              </div>
            </div>

            <div className="h-5 w-5 rounded-full border-2 border-slate-400"></div>
          </button>

          {/* System */}
          <button onClick={HandleSystemTheme} className="w-full flex items-center justify-between rounded-2xl border-2 border-slate-200 px-5 py-4 hover:border-green-500 transition">
            <div className="flex items-center gap-4">
              <span className="text-3xl">💻</span>
              <div className="text-left">
                <h3 className="font-semibold ">
                  System Theme
                </h3>
                <p className="text-sm ">
                  Follow device settings
                </p>
              </div>
            </div>

            <div className="h-5 w-5 rounded-full border-2 border-slate-400"></div>
          </button>
        </div>

        
      </div>
    </div>
  );
};

export default ThemeSwitcher;