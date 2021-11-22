import HOSPITALISATIONS from '../data/hospitalisations.json'
import { createSlice } from '@reduxjs/toolkit'

const hospByDate = HOSPITALISATIONS.reduce((ac, cv) => {
  const el = ac.find(x => x.DATE === cv.DATE)

  if(el === undefined){
    ac.push({
      DATE: cv.DATE,
      hosp: [cv]
    })
  }
  else{
    el.hosp.push(cv)
  }

  return ac
}, [])

const initialState = {
  hospByDate,
  offset: 0
}

const dataReducer = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setOffset: (state, {payload}) => {
      state.offset = parseInt(payload)
    }
  },
})

export const { setOffset } = dataReducer.actions

export default dataReducer.reducer