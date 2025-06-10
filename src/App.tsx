import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import { useSelector } from "react-redux";
import type { RootState } from "./app/store";
import { motion } from "framer-motion";

const App = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <div className={ darkMode ? "dark bg-gray-900 text-white min-h-screen flex flex-col" : "bg-gray-100 text-black min-h-screen flex flex-col" }>

      <Navbar />
      <ThemeToggle />
      <motion.div
        animate={ { backgroundColor: darkMode ? "#1a202c" : "#f7fafc", color: darkMode ? "#fff" : "#000" } }
        transition={ { duration: 0.5 } }
        className="min-h-screen flex flex-col"
      >
        <AppRoutes />
      </motion.div>
      <Footer />
    </div>
  );
};

export default App;
