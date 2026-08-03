import { useState } from 'react'


import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Progress from './components/Progress/Progress'
import About from './components/About/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Hero />
      <section id="center">
        <div className="hero">
          

          
        </div>
        <div>
        </div>
        <Progress
  count={count}
  setCount={setCount}
/>
<About />
      </section>
    </>
    
  )
}

export default App
