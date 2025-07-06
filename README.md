# TODO List App

## Overview
This is a simple TODO list application that allows users to create, manage, and organize their tasks. The app provides basic functionality for adding, editing, marking as complete, and deleting tasks.

## Features

### Core Features
- Add new tasks with titles and optional descriptions
- Mark tasks as complete/incomplete
- Edit existing tasks
- Delete tasks
- Filter tasks (All, Active, Completed)
- Persistent storage (tasks are saved between sessions)

### Additional Features
- Due date reminders
- Task prioritization (High, Medium, Low)
- Search functionality
- Dark/Light theme toggle

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/daveontrack/todo-list-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd todo-list-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```
5. Open your browser and navigate to `http://localhost:3000`

## Usage
1. **Adding a Task**:
   - Click on the input field at the top
   - Enter your task title
   - Press Enter or click the "+" button

2. **Completing a Task**:
   - Click the checkbox next to the task

3. **Editing a Task**:
   - Click the edit button (pencil icon)
   - Make your changes
   - Press Enter or click outside the input field

4. **Deleting a Task**:
   - Click the delete button (trash icon)

5. **Filtering Tasks**:
   - Use the filter buttons at the bottom to show All, Active, or Completed tasks

## Technologies Used
- React.js
- TypeScript (optional)
- CSS/Sass
- LocalStorage (for data persistence)
- React Icons (for icons)

## Folder Structure
```
/src
  /components
    TodoItem.tsx
    TodoList.tsx
    AddTodo.tsx
    FilterButtons.tsx
  /styles
    main.scss
    variables.scss
  /types
    Todo.ts
  App.tsx
  index.tsx
```

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License
MIT License - see the LICENSE file for details.


## Future Improvements
- User authentication
- Sync across devices
- Task categories/tags
- Recurring tasks
- Drag and drop reordering


