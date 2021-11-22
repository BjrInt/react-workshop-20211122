import { useSelector } from "react-redux"

const Graph = () => {
  const selectedProvince = useSelector(state => state.data.selectedProvince)
  const maxIn = useSelector(state => state.data.maxIn)
  const hospByProvince = useSelector(state => state.data.hospByProvince)

  if(selectedProvince !== null) {
    const _province = hospByProvince.find(x => x.PROVINCE === selectedProvince)
    const dT = new Date(_province.hosp[_province.hosp.length -1].DATE).getTime() - new Date(_province.hosp[0].DATE).getTime()

    return (
      <div>
        <h1>{selectedProvince}</h1>

        <svg height="300" width="1200" viewBox="0 0 1200 300">
          <polyline points={
            hospByProvince.find(x => x.PROVINCE === selectedProvince)
            .hosp
            .map(el => {
              const x = (new Date(el.DATE).getTime() - new Date(_province.hosp[0].DATE).getTime()) / dT * 1200
              const y = 300 - (el.TOTAL_IN / maxIn * 300)

              return `${x},${y}`
            }).join(' ')
          } strokeWidth="2" stroke="red" fill="none" /> 
        </svg>
      </div>
    )
  }
  return (<div>Selectionne une province</div>)
  

}

export default Graph