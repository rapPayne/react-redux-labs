
import { cleanup, render, screen } from '@testing-library/react';
import { TaskList } from '../TaskList';
import { taskRepository } from '../data/taskRepository';
import userEvent from '@testing-library/user-event';

describe("TaskList Component", () => {
  beforeEach(() => {
    // mock the repo so as to hardcode tasks
    jest.spyOn(taskRepository, 'getAll').mockReturnValue([...seedTasks]);
  });

  afterEach(() => {
    cleanup();
  });

  it("has the right number of Task components", () => {
    render(<TaskList />);
    expect(screen.queryAllByTestId("task")).toHaveLength(seedTasks.length)
  });

  it("can be ordered by due date", () => {
    render(<TaskList />);
    const sortByDropdown = screen.getByLabelText("Sort by");
    userEvent.selectOptions(sortByDropdown, "due")
    const dates = screen.getAllByTestId("taskDue").map(span => new Date(span.textContent));
    for (let i = 0; i < dates.length - 1; i++) {
      expect(dates[i] < dates[i + 1]).toBeTruthy();
    }
  });

  it("can be ordered by priority", () => {
    //Arrange
    render(<TaskList />);
    const sortBySelect = screen.getByLabelText(/sort by/i);
    //Act
    userEvent.selectOptions(sortBySelect, "priority");
    //Assert
    const priorities = screen
      .getAllByTestId("taskPriority")
      .map(span => span.textContent)
      .map(priority => +priority); // Convert to array of numbers
    for (let i = 0; i < priorities.length - 1; i++) {
      expect(priorities[i]).toBeLessThanOrEqual(priorities[i + 1]);
    }
  });

  it("can be ordered by title", () => {
    // Arrange
    render(<TaskList />);
    const sortByDropdown = screen.getByLabelText(/sort by/i);
    const sortedTitles = seedTasks.map(t => t.title).sort();
    // Act
    userEvent.selectOptions(sortByDropdown, "title");
    // Assert
    const titles = screen
      .getAllByTestId("taskTitle")
      .map(span => span.textContent);
    expect(JSON.stringify(titles)).toEqual(JSON.stringify(sortedTitles))
  });

  it("will _select_ the right task", () => {
    // Arrange
    render(<TaskList />);
    const { title, description, priority, due } = seedTasks[0];
    const aTaskComponent = screen.queryAllByTestId("task")[0]; // Grab the first one
    // Act
    userEvent.click(aTaskComponent);
    // Assert
    expect(screen.getByLabelText(/title/i).value).toEqual(title);
    expect(screen.getByLabelText(/description/i).value).toEqual(description);
    expect(screen.getByLabelText(/due/i).value).toEqual(due);
    expect(screen.getByLabelText(/priority/i).value).toEqual(priority + "");
  });

  it("can purge all deleted tasks", () => {
    // Arrange
    jest.spyOn(taskRepository, 'getAll').mockReturnValue([{ ...seedTasks[0], completed: true }, { ...seedTasks[1] }, { ...seedTasks[2], completed: true }]);
    render(<TaskList />);
    expect(screen.queryAllByTestId("task")).toHaveLength(3);
    const purgeCompletedTasksButton = screen.getByText(/purge.*completed/i);
    // Act
    userEvent.click(purgeCompletedTasksButton);
    // Assert
    expect(screen.queryAllByTestId("task")).toHaveLength(1);
    //throw "not implemented";
  })

});

const seedTasks = [
  {
    "id": 1,
    "title": "b Task 1",
    "description": "Description of task 1",
    "due": "2025-06-06",
    "priority": 1
  },
  {
    "id": 2,
    "title": "a Task 2",
    "description": "Description of task 2",
    "due": "2024-06-06",
    "priority": 2
  },
  {
    "id": 3,
    "title": "c Task 3",
    "description": "Description of task 3",
    "due": "2023-06-06",
    "priority": 3
  }
]