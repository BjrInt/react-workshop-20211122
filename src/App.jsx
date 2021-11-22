import './main.scss'

import Display from './components/Display/Display.jsx'
import Slider from './components/Slider/Slider.jsx'
import Belgium from './components/Belgium/Belgium.jsx'
import Graph from './components/Graph/Graph.jsx'


const App = () => (
  <main>
    <section style={{ display: 'flex' }}>
      <Belgium />
      <Display />
    </section>

    <Slider />
    <Graph />
  </main>
)

export default App