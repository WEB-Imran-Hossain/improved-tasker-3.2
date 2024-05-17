import React, { useContext } from "react";
import SearchBox from "./SearchBox";
import TaskList from "./TaskList";
import { TaskContext } from "../../context";

const TaskBoard = () => {
  const { tasks, setTasks } = useContext(TaskContext);
  return (
    <>
      {/* Begin Table */}
      <section className="mb-20" id="tasks">
        <div className="container">
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <SearchBox />

            <div className="overflow-auto">
              <TaskList 
              tasks={tasks} />
            </div>
          </div>
        </div>
      </section>
      {/* End Table */}
    </>
  );
};

export default TaskBoard;
