import { useDispatch, useSelector } from "react-redux"
import { setOffset } from '../../reducers/dataReducer'
import './Slider.scss'

const Slider = () => {
  const dispatch = useDispatch()
  const offset = useSelector(state => state.data.offset)
  const dataLen = useSelector(state => state.data.hospByDate.length)

  return (
    <input type="range" 
           name="slider" 
           id="slider"
           min={0}
           max={dataLen - 1}
           value={offset}
           onChange={(e) => dispatch(setOffset(e.target.value))} />
  )
}

export default Slider