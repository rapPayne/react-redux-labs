import { taskRepository } from '../data/taskRepository';
describe("taskRepository", () => {
  // Load up test tasks to be used by the tests
  beforeEach(() => {
    seedTasks.forEach(task => taskRepository.add(task));
  });
  // Clean out the repository after each
  afterEach(() => {
    taskRepository.removeAll();
  });

  it("can read all tasks", () => {
    const tasks = taskRepository.getAll();
    expect(tasks.length).toEqual(3);
  });

  it("can get a task by id", () => {
    const targetTask = { ...taskRepository.getAll()[0] };
    const task = taskRepository.getById(targetTask.id);
    for (let prop in task) {
      expect(task[prop]).toEqual(targetTask[prop]);
    }
  })

  it("can add a new task", () => {
    const newTask = { title: "New Task" };
    taskRepository.add(newTask);
    expect(taskRepository.getAll()).toHaveLength(4);
  });

  it("adds a task with a new, unique id", () => {
    const beforeTasks = [...taskRepository.getAll()];
    const newTask = { title: "New Task" };
    const addedTask = taskRepository.add(newTask);
    expect(typeof addedTask.id).toEqual("number");
    expect(beforeTasks).not.toContain(addedTask);
    expect(beforeTasks.some(t => t.id === addedTask.id)).toBeFalsy();
    expect(taskRepository.getAll()).toContain(addedTask);
    expect(taskRepository.getAll().some(t => t.id === addedTask.id)).toBeTruthy();
  });

  it("can remove a task", () => {
    const countBefore = taskRepository.getAll().length;
    const task1 = taskRepository.getAll()[0];
    taskRepository.remove(task1);
    expect(taskRepository.getAll().length).toEqual(countBefore - 1);
  });

  it("can complete a task", () => {
    const task = taskRepository.getAll()[0];
    expect(task.completed).toBeFalsy();
    taskRepository.complete(task);
    expect(task.completed).toEqual(true);
  });

  it("can uncomplete a task", () => {
    const task = taskRepository.getAll()[0];
    taskRepository.complete(task);
    expect(task.completed).toEqual(true);
    taskRepository.uncomplete(task);
    expect(task.completed).toEqual(false);
  });

  it("can change the details of a task", () => {
    const task = { ...taskRepository.getAll()[0] };
    task.description = "New description";
    task.title = "New task title";
    task.priority += 1;
    task.due = new Date("2021-04-19");
    taskRepository.update(task);
    const repoTask = { ...taskRepository.getById(task.id) };
    expect(repoTask.title).toEqual(task.title);
    expect(repoTask.description).toEqual(task.description);
    expect(repoTask.due).toEqual(task.due);
    expect(repoTask.priority).toEqual(task.priority);
  })
});

const seedTasks = [
  {
    id: 1,
    title: "Task 1",
    description: "Description of task 1",
    due: new Date(),
    priority: 1,
  },
  {
    id: 2,
    title: "Task 2",
    description: "Description of task 2",
    due: new Date(),
    priority: 2,
  },
  {
    id: 3,
    title: "Task 3",
    description: "Description of task 3",
    due: new Date(),
    priority: 3,
  },
]