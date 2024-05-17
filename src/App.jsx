import "./App.css";
import HeroSection from "./components/HeroSection";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import TaskBoard from "./components/table-elements/TaskBoard";
import { TasksData } from "./components/data/TasksData";
import { TaskContext } from "./context";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(TasksData);

  return (
    <div className="flex flex-col items-center justify-center">
      <TaskContext.Provider value={{tasks, setTasks}}>
        <Header />
        <HeroSection />
        <TaskBoard />
        <Footer />
      </TaskContext.Provider>
    </div>
  );
}

export default App;
