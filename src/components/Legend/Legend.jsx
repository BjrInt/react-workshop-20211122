import { useSelector } from "react-redux"
import './Legend.scss'

const Legend = () => {
  const {x, y} = useSelector(state => state.data.mousePosition)
  const hoveredProvince = useSelector(state => state.data.hoveredProvince)
  
  if(x && y){
    return (
      <div id="legend" style={{ top: y, left: x}}>
        <div className="txt">
          <div>
            <strong>{hoveredProvince}</strong>
          </div>
        </div>
      </div>
    )
  }
  
  return ( <div id="legend" /> )
}

export default Legend