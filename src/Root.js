import React from 'react'
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

const Root = ({store, history, routes}) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {routes}
      </ConnectedRouter>
    </Provider>
  )
}

export default Root;
