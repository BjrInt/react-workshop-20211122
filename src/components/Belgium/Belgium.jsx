import { useSelector, useDispatch } from 'react-redux'
import { setSelectedProvince, setHoveredProvince, unsetMousePosition } from '../../reducers/dataReducer'
import provinces from './provinces.json'
import './Belgium.scss'

const fillipe = (nb, max) => {
  return `hsl(${120 - ((nb / max) * 120)}, 65%, 65%)`
}

const Belgium = () => {
  const dispatch = useDispatch()
  const maxIn = useSelector(state => state.data.maxIn)
  const toDisplay = useSelector(state => state.data.hospByDate[state.data.offset])

  console.log()
  return (
  <svg baseProfile="tiny" height={408} stroke="#ffffff" strokeWidth={2} version="1.2" viewBox="0 0 1000 817" width={500} xmlns="http://www.w3.org/2000/svg">
    {
      provinces.map(province => (
        <path id={province.name} 
              d={province.coord}
              onClick={() => dispatch(setSelectedProvince(province.name))}
              onMouseEnter={(e) => dispatch(setHoveredProvince([e.clientX, e.clientY, province.name]))}
              onMouseLeave={(e) => dispatch(unsetMousePosition())}
              fill={
                fillipe(toDisplay.hosp.find(x => x.PROVINCE === province.name).TOTAL_IN, maxIn)
              } 
                /> 
      ))
    }
  </svg>
  )
}

export default Belgium