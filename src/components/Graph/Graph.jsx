import { useSelector, useDispatch } from "react-redux"
import { setOffsetFromGraph } from '../../reducers/dataReducer'
import './Graph.scss'

const Graph = () => {
  const dispatch = useDispatch()
  const selectedProvince = useSelector(state => state.data.selectedProvince)
  const maxIn = useSelector(state => state.data.maxIn)
  const hospByProvince = useSelector(state => state.data.hospByProvince)

  if(selectedProvince !== null) {
    const _province = hospByProvince.find(x => x.PROVINCE === selectedProvince).hosp
    const dT = new Date(_province[_province.length -1].DATE).getTime() - new Date(_province[0].DATE).getTime()
    const xy = _province.map(el => {
                const x = (new Date(el.DATE).getTime() - new Date(_province[0].DATE).getTime()) / dT * 1200
                const y = 300 - (el.TOTAL_IN / maxIn * 300)

                return [x, y, el.DATE]
              })

    return (
      <div>
        <h1>{selectedProvince}</h1>

        <svg height="300" width="1200" viewBox="0 0 1200 300">
          <polyline points={
            xy.map(([x, y]) => `${x},${y}`)
            .join(' ')
          } strokeWidth="2" stroke="red" fill="none" />
          {
            xy.map(([x, y, d], i) => (
              i % 7 === 0 && 
              <circle r={5} 
                      cx={x} 
                      cy={y} 
                      stroke="#222" 
                      strokeWidth="2" 
                      fill="red"
                      onClick={() => dispatch(setOffsetFromGraph(d))} />
            ))
          }
        </svg>
      </div>
    )
  }
  return (<div>Selectionne une province</div>)
  

}

export default Graph