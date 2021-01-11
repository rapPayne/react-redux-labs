import React from 'react'
import { registerRootComponent } from 'expo'
import { App } from './App'
import { Provider } from 'react-redux'
import { store } from './store/store'

registerRootComponent(() => (
  <Provider store={store}>
    <App />
  </Provider>
))
