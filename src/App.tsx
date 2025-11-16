import './App.css'
import NavBar from './ui/navbar'
import Hero from './ui/hero'
import ChromeBtn from './ui/chromebutton'
import Info from './ui/info'
import Footer from './ui/footer'

function App() {

  return (
    <>
    <NavBar/>
    <div className='w-full h-fit flex flex-col items-center justify-center'>
    <Hero/>
    <ChromeBtn />
    </div>
    <div>
      <Info/>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  )
}

export default App
