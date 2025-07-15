import './App.css'
import Router from './Routes'
import FixedMenu from './components/common/Header'

function App() {
  return (
    <>
      <FixedMenu />
      <Router />
    </>
  )
}

export default App