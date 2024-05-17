import React from "react";
import SearchBox from "./SearchBox";
import TaskList from "./TaskList";

const TaskBoard = () => {
  return (
    <>
      {/* Begin Table */}
      <section className="mb-20" id="tasks">
        <div className="container">
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">

            <SearchBox />

            <div className="overflow-auto">

              <TaskList />
            </div>
          </div>
        </div>
      </section>
      {/* End Table */}
    </>
  );
};

export default TaskBoard;
