import { useState, useEffect } from 'react';
import { taskRepository } from './data/taskRepository';
import { Task } from './Task';
import { TaskEdit } from './TaskEdit';

export const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState({});
  useEffect(() => {
    setTasks(taskRepository.getAll());
  }, []);
  //console.log("in tasklist", tasks)
  return (
    <>
      <h1>I'm TaskList</h1>
      <button onClick={purgeCompletedTasks}>Purge completed tasks</button>
      <label htmlFor="sortByDropdown">Sort by</label>
      <select id="sortByDropdown" value="title" onChange={reorderTasks}>
        <option value="title">Title</option>
        <option value="due">Due date</option>
        <option value="priority">Priority</option>
      </select>
      {tasks.map(task => <Task task={task} key={task.id} setSelectedTask={setSelectedTask} />)}
      <TaskEdit selectedTask={selectedTask} key={selectedTask.id} />
    </>
  )

  // "value" must be one of the properties of a task (due, priority, title, description, etc.)
  function reorderTasks({ target: { value } }) {
    tasks.sort((a, b) => a[value] < b[value] ? -1 : a[value] > b[value] ? 1 : 0);
    setTasks(() => [...tasks]);
  }

  function purgeCompletedTasks() {
    const remainingTasks = tasks.filter(t => t.completed !== true)
    setTasks([...remainingTasks]);
  }
}