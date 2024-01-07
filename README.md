# Task List App

A simple task list app built with ReactJS and Vite.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Running Tests](#running-tests)

## Features

- Add tasks to the list.
- Update tasks of the list
- Delete tasks.
- Mark tasks as completed.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation
1. Clone the repository:
   git clone https://github.com/your-username/task-list-app.git

2. Install dependencies:
    - npm install

## Usage

Start the development server:
    - npm run dev

## Folder Structure
task-list-app/
|-- config/
|-- public/
|-- src/
|   |-- __mocks__/
|   |-- __test__/
|   |-- components/
|   |   |-- TaskForm.jsx
|   |   |-- TaskForm.css
|   |   |-- TaskList.jsx
|   |   |-- TaskList.css
|   |   |-- TaskApp.jsx
|   |   |-- TaskApp.css
|   |-- context/
|   |   |-- TaskContext.jsx
|   |   |-- TaskReducer.jsx
|   |-- hook/
|   |   |-- useTaskActions.jsx
|   |-- main.jsx
|-- package.json
|-- README.md

## Running tests
To run tests use the following command:
    - npm test
