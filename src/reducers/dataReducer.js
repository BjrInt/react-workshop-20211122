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

const hospByProvince = HOSPITALISATIONS.reduce((ac, cv) => {
  const el = ac.find(x => x.PROVINCE === cv.PROVINCE)

  if(el === undefined){
    ac.push({
      PROVINCE: cv.PROVINCE,
      hosp: [cv]
    })
  }
  else{
    el.hosp.push(cv)
  }

  return ac
}, [])

const maxIn = HOSPITALISATIONS.reduce((ac, cv) => {
  if(cv.TOTAL_IN > ac)
    ac = cv.TOTAL_IN
  
  return ac
}, 0)

const initialState = {
  hospByDate,
  hospByProvince,
  offset: 0,
  maxIn,
  selectedProvince: null,
}

const dataReducer = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setOffset: (state, {payload}) => {
      state.offset = parseInt(payload)
    },

    setSelectedProvince: (state, {payload}) => {
      state.selectedProvince = payload
    }
  },
})

export const { setOffset, setSelectedProvince } = dataReducer.actions

export default dataReducer.reducer