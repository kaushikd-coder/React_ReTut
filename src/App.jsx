// import './App.css'
import Bg from './components/BgChnager/Bg'
import Card from './components/Card'
import PassGenerator from './components/PassGen/PassGenerator'

function App() {

  return (
    <>
      <h1 className='text-3xl bg-green-300 p-5 text-black rounded-md'>Welcome to React_Tut</h1>
      <Card username="Dcoder"/>
      <Card username=""/>
      <Card username=""/>
      <Bg />
      <PassGenerator/>
    </>
  )
}

export default App
