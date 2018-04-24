import {createStore,compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';


import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';


// default data 

const defaultState = {
    posts,
    comments
}

const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
);


const store = createStore(rootReducer,defaultState,enhancers);

export const history = syncHistoryWithStore(browserHistory,store);


export default store;