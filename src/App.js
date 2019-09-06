import React from "react";

import TodoItem from "./TodoItem";
import todosData from "./todoData";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: todosData
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(id) {
		console.log("clicked", id);

		this.setState(prevState => {
			const updatedTodo = prevState.todos.map(todo => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo; //this return will return the updated value flipping the complete state so that it can be saved in the new array being created
			});

			//prevState is an object, hence should retun an object with updated todo
			return {
				todos: updatedTodo
			};
		});
	}
	render() {
		const todoItem = todosData.map(item => (
			<TodoItem
				className="todo-item"
				key={item.id}
				item={item}
				handleChange={this.handleChange}
			/>
		));

		return <div>{todoItem}</div>;
	}
}

export default App;
