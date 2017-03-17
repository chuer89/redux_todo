import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {
	ADD_TODO,
	COMPLETE_TODO,
	addTodo,
	completeTodo,
	delTodo,
	markTodo
} from './../actions';

import AddTodo from './../components/AddTodo';
import TodoList from './../components/TodoList';
import TodoFooter from './../components/TodoFooter';


class App extends Component {
	render() {
		const { dispatch, visibleTodos, visibilityFilter } = this.props;
		return (
			<div>
				<AddTodo onAddClick={text => dispatch(addTodo(text))}/>

				<TodoList todos={visibleTodos} 
					onMarkTodo={index => dispatch(markTodo(index))} 
					onTodoDel={index => dispatch(delTodo(index))}/>

				<TodoFooter todos={visibleTodos} />
			</div>
		)
	}
}

App.PropTypes = {
	// visibleTodos: PropTypes.arrayOf(PropTypes.shape({
	// 	text: PropTypes.string.isRe
	// }))
}

function select(state) {
	return {
		visibleTodos: state.todos
	}
}

export default connect(select)(App);