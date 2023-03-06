import './App.css'
import Events from './components/Events'
import Footer from './components/Footer'
import Heads from './components/Heads'
import Home from './components/Home'

function App() {

  return (
    <div className="bg-[#f8f7ff]">
      <Home />
      {/* <About /> */}
      <Events />
      <Heads />
      <Footer />
    </div>
  )
}

export default App
