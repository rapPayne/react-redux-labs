import { useState } from 'react';

export const TaskEdit = ({ selectedTask = {} }) => {
  const [priority, setPriority] = useState(selectedTask.priority);
  const [due, setDue] = useState(selectedTask.due);
  const [title, setTitle] = useState(selectedTask.title);
  const [description, setDescription] = useState(selectedTask.description);

  return (
    <section>
      <h2>Edit this Task</h2>
      <div>
        <label htmlFor="title">Title</label>
        <input id="title" value={title} onChange={setTitle} autoComplete="off" />
      </div>
      <div>
        <label htmlFor="due">Due date</label>
        <input id="due" value={due} onChange={setDue} type="date" />
      </div>
      <div>
        <label htmlFor="priority">Priority</label>
        <input id="priority" value={priority} onChange={e => setPriority(e.target.value)} />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input id="description" value={description} onChange={setDescription} autoComplete="off" />
      </div>
    </section>
  )
}