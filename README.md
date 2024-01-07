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
|(\t)   |-- __mocks__/  
|(\t)   |-- __test__/  
|(\t)   |-- components/  
|(\t)   |(\t)   |-- TaskForm.jsx  
|(\t)   |(\t)   |-- TaskForm.css  
|(\t)   |(\t)   |-- TaskList.jsx  
|(\t)   |(\t)   |-- TaskList.css  
|(\t)   |(\t)   |-- TaskApp.jsx  
|(\t)   |(\t)   |-- TaskApp.css  
|(\t)   |-- context/  
|(\t)   |(\t)   |-- TaskContext.jsx  
|(\t)   |(\t)   |-- TaskReducer.jsx  
|(\t)   |-- hook/  
|(\t)   |(\t)   |-- useTaskActions.jsx  
|(\t)   |-- main.jsx  
|-- package.json  
|-- README.md  

## Running tests
To run tests use the following command:
    - npm test
