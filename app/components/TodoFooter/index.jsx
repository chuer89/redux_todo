import React, { Component, PropTypes } from 'react';
import {findDOMNode} from 'react-dom';

export default class TodoFooter extends Component {
	render() {
		return (
			<div>
				共{this.props.todos.lenElem}个
			</div>
		)
	}
}