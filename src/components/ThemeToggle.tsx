import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../features/theme/themeSlice";
import type { RootState } from "../app/store";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <div className="flex justify-center p-4">
      <button
        onClick={ () => dispatch(toggleDarkMode()) }
        className="p-2 bg-gray-300 dark:bg-gray-700 rounded"
      >
        { darkMode ? "🌙 Dark Mode" : "🌞 Light Mode" }
      </button>
    </div>
  );
};

export default ThemeToggle;

