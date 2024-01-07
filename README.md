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
   git clone https://github.com/fervd24/Task-list-app

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
|&nbsp;   |-- __mocks__/  
|&nbsp;   |-- __test__/  
|&nbsp;   |-- components/  
|&nbsp;   |&nbsp;   |-- TaskForm.jsx  
|&nbsp;   |&nbsp;   |-- TaskForm.css  
|&nbsp;   |&nbsp;   |-- TaskList.jsx  
|&nbsp;   |&nbsp;   |-- TaskList.css  
|&nbsp;   |&nbsp;   |-- TaskApp.jsx  
|&nbsp;   |&nbsp;   |-- TaskApp.css  
|&nbsp;   |-- context/  
|&nbsp;   |&nbsp;   |-- TaskContext.jsx  
|&nbsp;   |&nbsp;   |-- TaskReducer.jsx  
|&nbsp;   |-- hook/  
|&nbsp;   |&nbsp;   |-- useTaskActions.jsx  
|&nbsp;   |-- main.jsx  
|-- package.json  
|-- README.md  

## Running tests
To run tests use the following command:
    - npm test
