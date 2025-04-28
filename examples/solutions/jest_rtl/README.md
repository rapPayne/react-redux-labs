# Jest and React Testing Library Example

No need to install jest or RTL. They're added by create-react-app.

Using the [repository pattern]()
Data will be stored locally in local storage. 
No authentication

## Contents
1. [Requirements](#requirements)
1. [IDE help](#ide_help)

TDD

## Requirements
Do these requirements

Task repository
- Can read all tasks
- Can read a task by id
- Can add a task
- Adds a task with a new, unique id
- Can remove a task
- Can complete a task
- Can un-complete a task
- Can change details of a task

Task List
- Has the right number of tasks
- Can be ordered by due date
- Can be ordered by priority
- Can be ordered by title
- Will _select_ the correct task (When the user taps a task, it becomes the selected task)
- Can purge all deleted tasks

TaskEdit
- Can add a new Task
- Can mark the Task as completed
- Can mark as un-completed
- Can change the description
- Can change the priority
- Can change the due date

Task
- can be marked as completed (Note: this can also happen in TaskEdit)
- Can be marked as un-completed (Note: this can also happen in TaskEdit)

## IDE help
You'll notice that when you first start using Jest, the IDE won't recognize `it`, `test`, `describe`, `beforeEach`, `expect`, matchers and so on. So intellisense, code completion, linting, and the like won't work. So you'll try 
```javascript
import { it, test, describe } from 'jest';
```
But of course, the linting rule `no-jest-import` complains.

So how do you get help? Create a jsconfig.json file in the root of your app and add this:
```json
{
    "typeAcquisition": {
        "include": [
            "jest"
        ]
    }
}
```
No need to restart or refresh or anything. VS Code now immediately understands Jest commands.

## Mocking the repository
We will test everything in the taskRepository but we can't have the repository populating tasks while we're testing React components. That wouldn't be a unit test. So in the components that depend on the taskRepository, we'll be mocking it with Jest.fn().
```JavaScript

```

