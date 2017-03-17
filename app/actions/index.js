
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const DEL_TODO = 'DEL_TODO';
export const MARK_TODO = 'MARK_TODO';

export function addTodo (text) {
	return {
		type: ADD_TODO,
		text
	}
}

export function completeTodo(index) {
	return {
		type: COMPLETE_TODO,
		index
	}
}

export function delTodo (index) {
	return {
		type: DEL_TODO,
		index
	}
}

export function markTodo (index) {
	return {
		type: MARK_TODO,
		index
	}
}