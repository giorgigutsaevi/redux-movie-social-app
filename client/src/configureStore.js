import { createStore, applyMiddleware, compose} from 'redux';
import rootReducer, {rootSaga} from './store';
import createSagaMiddleware from 'redux-saga'

export default function configureStore(initialState) {

	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const sagaMiddleware = createSagaMiddleware()

	const store = createStore(
		rootReducer,
		initialState,
		composeEnhancers(applyMiddleware(sagaMiddleware))
	)

	sagaMiddleware.run(rootSaga)
	return store

}