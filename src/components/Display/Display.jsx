import { useSelector } from "react-redux"

const Display = () => {
  const toDisplay = useSelector(state => state.data.hospByDate[state.data.offset])

  return (
    <div>
      <h1>{new Date(toDisplay.DATE).toLocaleDateString()}</h1>

      <h2>
        {toDisplay.hosp.reduce((ac, cv) => (ac += cv.TOTAL_IN), 0)} lits occupés
      </h2>
    </div>
  )
}

export default Display