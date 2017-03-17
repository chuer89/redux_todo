import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {
	render () {
		const { onTodoDel, completed, text, onMarkTodo } = this.props;

		return (
			<div>
				<input onChange={onMarkTodo} type="checkbox"/>
				<span>{text}</span>
				<button onClick={onTodoDel}>删除</button>
			</div>
		)
	}

	handleDel(e) {
		// this.props.onTodoDel();
	}
}

Todo.PropTypes = {
	text: PropTypes.string.isRequired
}