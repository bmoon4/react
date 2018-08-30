import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import TodoList from "./todoList/TodoList";
import Contact from "./contact/Contact";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/todolist" render={() => <TodoList />} />
        <Route exact path="/contact" render={() => <Contact />} />
      </Switch>
    );
  }
}

export default App;
