import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import TodoListTemplate from "./TodoListTemplate";
import Form from "./Form";
import TodoItemList from "./TodoItemList";

class TodoList extends Component {
  id = 3;
  state = {
    input: "",
    todos: [
      { id: 0, text: "Study React.js", checked: false },
      { id: 1, text: "ES6 Practice", checked: true },
      { id: 2, text: "Do 3 sets squats of 10 reps", checked: false }
    ]
  };

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleCreate = () => {
    const { input, todos } = this.state;
    if (input !== "") {
      this.setState({
        input: "", //empty the input
        todos: todos.concat({
          // add to the array by using concat
          id: this.id++,
          text: input,
          checked: false
        })
      });
    }
    else {
      alert("Please, fill the blank :p");
    }
  }

  handleKeyPress = e => {
    if (e.key === "Enter") {
      // if the enterkey is pressed
      this.handleCreate(); // call handleCreate()
    }
  };

  handleToggle = id => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id); // find index num using the id parameter
    const selected = todos[index];
    const nextTodos = [...todos]; // copy the array

    //기본의 값들을 복사하고, checked값을 덮어쓰기
    nextTodos[index] = {
      ...selected, // 전개연산자
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  };

  handleRemove = id => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  };

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;

    return (
      <div>
        <Header />
        <div className="todoContents">
          <TodoListTemplate
            form={
              <Form
                value={input}
                onKeyPress={handleKeyPress}
                onChange={handleChange}
                onCreate={handleCreate}
              />
            }
          >
            <TodoItemList
              todos={todos}
              onToggle={handleToggle}
              onRemove={handleRemove}
            />
          </TodoListTemplate>
        </div>

        <Footer />
      </div>
    );
  }
}

export default TodoList;
