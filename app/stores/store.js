import { createStore } from 'redux';
import rootReducer from './../reducers';

export default function configureStore() {
	const _store = createStore(rootReducer);

	return _store;
}