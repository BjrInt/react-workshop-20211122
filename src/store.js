import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './reducers/dataReducer'
import thunk from 'redux-thunk'

export const store = configureStore({
  reducer: { data: dataReducer },
  middleware: [thunk]
})