import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'
import data from './data'

function App() {
  const CardEle = data.map((data)=>{
    return <Card data={data}/>
  }) 
  return (
    <div className="App">
      <Navbar />
      {CardEle}
      {/* <Card /> */}
    </div>
  )
}

export default App
