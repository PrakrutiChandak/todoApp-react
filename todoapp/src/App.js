import React, { Component } from "react";
import Todos from './Todos';
import AddTodo from "./AddTodo";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from "./components/Contact";
import About from "./components/About";
import Post from "./components/Post";

import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
    state = {
        todos: [
          {id: 1, content: 'buy milk'},
          {id: 2, content: 'play mario'}
        ]
    }

    deleteTodo = (id) => {
      const todos = this.state.todos.filter(todo => {
        return todo.id !== id
      });
      this.setState({
        todos //if key and value have same name no need for todos: todos
      })
    }

    addTodo = (todo) => {
      todo.id = Math.random()
      let todos = [...this.state.todos, todo]
      this.setState({
        todos
      })
    }

    render() {
        return ( 
          <BrowserRouter>         
          <div className = "todo-app container" >
            <Navbar />
            <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path="/:post_id" component={Post} />
            </Switch>
            <h1 className="center blue-text">Todos</h1>
            <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
            <AddTodo addTodo={this.addTodo} />
          </div>
          </BrowserRouter>

        );
    }
}

export default App;