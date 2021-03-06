import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import allReducers from './reducers'
import 'semantic-ui-css/semantic.min.css';

const store = createStore(allReducers)

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>    
, document.getElementById('root'));
registerServiceWorker();
