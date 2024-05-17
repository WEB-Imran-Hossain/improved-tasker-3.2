import "./App.css";
import HeroSection from "./components/HeroSection";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import TaskBoard from "./components/table-elements/TaskBoard";

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <HeroSection />
      <TaskBoard />
      <Footer />
    </div>
  );
}

export default App;
