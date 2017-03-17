import {
	ADD_TODO,
	COMPLETE_TODO,
	DEL_TODO,
	MARK_TODO
} from './../actions';

import cloneDeep from 'lodash/cloneDeep'
import update from 'react-addons-update';

export default function todos(state = { elems: [], lenElem: 0}, action) {
	switch (action.type) {
		case ADD_TODO:
			return update(state, {
				elems: {
					$push: [{
						text: action.text
					}]
				},
				lenElem: {
					$set: state.elems.length + 1
				}
			});

		case DEL_TODO:
			return update(state, {
				elems: {
					$splice: [[action.index, 1]]
				},
				lenElem: {
					$set: state.elems.length - 1
				}
			})

		case MARK_TODO:
			let _newState = cloneDeep(state);

			_newState.elems[action.index].mark = !_newState.elems[action.index].mark;

			return  _newState;

		default:
			return state
	}
}