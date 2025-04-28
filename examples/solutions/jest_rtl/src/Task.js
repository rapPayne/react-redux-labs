export const Task = ({ task, setSelectedTask }) => {
  return (
    <section onClick={e => setSelectedTask(task)} data-testid="task">
      <span data-testid="taskTitle">{task.title}</span>
      <span data-testid="taskPriority">{task.priority}</span>
      <span data-testid="taskDue">{task.due.toString()}</span>
    </section>
  )
}