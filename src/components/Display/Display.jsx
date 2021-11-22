import { useSelector } from "react-redux"

const Display = () => {
  const offset = useSelector(state => state.data.offset)
  const toDisplay = useSelector(state => state.data.hospByDate[state.data.offset])

  return (
    <div>
      <h1>Case affichée {offset}</h1>

      <div>
        {JSON.stringify(toDisplay)}
      </div>
    </div>
  )
}

export default Display