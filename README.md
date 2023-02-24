# Task Accio

Task Accio is a full-stack web application that allows users to manage their tasks in a user-friendly way. Inspired by Trello, it provides features such as creating tasks, adding labels, checklists, and images, as well as login authentication and CRUD (Create, Read, Update, Delete) operations for tasks. With Task Accio, users can easily keep track of their tasks, prioritize them using drag-and-drop, and break them down into smaller, more manageable sub-tasks using checklists.

## Main Technologies Used

### Language
- **TypeScript**: Superset of JavaScript that adds static type definitions.

### User interface and Design
- **React JS**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for rapidly building custom designs.

### Frameworks
- **Next JS**: Framework for server-rendered React applications.

### State Management
- **Zustand**: Small, fast and scalable state management library for React applications.

### Data Management
- **React Query**: Library for managing and caching asynchronous data in React applications.

### Form Management
- **React Hook Form**: Library for managing forms in React applications.

### Rich Text Editing
- **Tiptap React**: Rich text editor built on Prosemirror and Vue.js, but made available for React.

### Drag and Drop
- **React Beautiful DnD**: Beautiful and accessible drag and drop for lists with React.

## Main Features

- **Login authentication**: JavaScript library for building user interfaces.
- **Labels**: Users can add labels to their tasks to categorize and filter them.
- **Checklist**: Users can add a checklist to their tasks to break them down into smaller, more manageable sub-tasks.
- **Image upload/download**: Users can upload and download images to their tasks to provide additional context.
- **Rich text editor**: Users can use a rich text editor to format their task descriptions and notes.
- **Drag and drop**: Users can drag and drop their tasks to prioritize and rearrange them.
- **Optimistic updates using React Query**: Task Accio uses React Query to provide optimistic updates. This means that when a user performs an action (e.g., completing a task), the application immediately updates the UI to reflect the action, without waiting for a response from the server. This provides a better user experience and reduces perceived latency.

## Installation

Clone the project

```bash
  git clone https://github.com/riandev25/project-management.git
```

Go to the project directory

```bash
  cd project-management
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NODE_ENV`

## Usage

To use Task Accio, follow these steps:

1.  Register for a new account or log in with an existing account.

2.  After creating a new board in Task Accio, the user is redirected to the home page where they can create a board. Existing boards can also be selected from the home page to view tasks.

## Where To Access The App

You can access Task Accio on the web at: https://taskaccio.vercel.app

## Authors

- [@riandev25](https://github.com/riandev25)

## License

[MIT](https://github.com/riandev25/project-management/blob/main/LICENSE.md/)

## Feedback

If you have any feedback or suggestions, feel free to contact us at rianengracia@gmail.com
