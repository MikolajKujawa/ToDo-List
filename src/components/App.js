import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList'
import './App.css';

class App extends Component {
  counter = 5
  state = {
    tasks: [
      {
        id: 0,
        text: 'zagrać wreszcie w Cyberpunk',
        date: '2018-02-15',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: 'zrobić zakupy',
        date: '2019-02-18',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: 'kupić telefon',
        date: '2020-12-28',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: 'pojechać na wakacje',
        date: '2019-06-08',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 4,
        text: 'kupić kwiaty',
        date: '2020-10-21',
        important: false,
        active: true,
        finishDate: null,
      },
    ]
  }

  deleteTask = (id) => {
    console.log("delete elementu o id " + id);
    /*const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);

    this.setState({
      tasks
    })*/
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks
    })
  }

  changeTaskStatus = (id) => {
    console.log("change w stanie elementu o id " + id);
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })
  }

  addTask = (text, date, important) => {
    //console.log('dodany obiekt');
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null,
    }
    console.log(task, this.counter)
    this.counter++
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))
    return true
  }

  render() {
    return (
      <div className="App">
        <h1>ToDo App</h1>
        <AddTask add={this.addTask}/>
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus}/>
      </div>
    );
  }
}

export default App;
