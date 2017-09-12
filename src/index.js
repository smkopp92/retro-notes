import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'

import Root from './Root'
import routes from './routes'
import configureStore from './store/configureStore';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const history = createHistory()
const store = configureStore(history);

ReactDOM.render(
  <Root store={store} history={history} routes={routes}/>,
  document.getElementById('root')
)
