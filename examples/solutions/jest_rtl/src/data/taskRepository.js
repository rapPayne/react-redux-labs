let tasks = [];

/// Adds a task to the list
const add = (task) => {
  task.id = getNextTaskId();
  tasks.push(task);
  //console.log("in add ", tasks)
  return task;
}

/// Marks the task as completed
const complete = task => {
  task.completed = true;
};

/// Return a *copy* of all of the tasks.
const getAll = () => {
  return [...tasks];
};

/// Returns the task whose id is supplied
const getById = id => tasks.find(t => t.id === id);

/// Reads the stored tasks
const readFromStorage = () => {
  tasks = JSON.parse(localStorage.getItem("tasks")) || [];
}

/// Saves the stored tasks
const saveToStorage = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
/// Remove/delete the task supplied
const remove = task => {
  tasks = tasks.filter(t => task !== t);
};

/// Remove/delete all tasks
const removeAll = () => {
  tasks.length = 0;
}

/// Marks the task as not completed
const uncomplete = task => {
  task.completed = false;
}

/// Updates any number of properties of the Task except for the id.
const update = task => {
  const repoTask = tasks.find(t => t.id === task.id);
  for (let prop in task) {
    if (prop === "id") continue;
    repoTask[prop] = task[prop];
  }
}

// Get the biggest id and add one to it
const getNextTaskId = () => {
  const sortedTasks = tasks.sort((a, b) => a.id - b.id)
  return (sortedTasks[tasks.length - 1]?.id ?? 0) + 1;
}

// On init, read the saved tasks
readFromStorage();

export const taskRepository = {
  add,
  complete,
  getAll,
  getById,
  remove,
  removeAll,
  uncomplete,
  update,
}