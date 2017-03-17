import React, { Component, PropTypes } from 'react';
import Todo from './todo';

export default class TodoList extends Component {
	render() {
		return (
			<div>
				{
					this.props.todos.elems.map((todo, index) => 
						<Todo {...todo} key={index} 
							onMarkTodo={() => this.props.onMarkTodo(index)}
						 	onTodoDel={() => this.props.onTodoDel(index)}/>
					)
				}
			</div>
		)
	}
}