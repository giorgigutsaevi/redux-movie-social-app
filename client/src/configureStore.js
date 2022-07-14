import { createStore, compose} from 'redux';
import rootReducer from './store';

export default function configureStore(initialState) {

	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	const store = createStore(
		rootReducer,
		initialState,
		composeEnhancers()
	)

	return store

}