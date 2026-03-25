import React from 'react'
import Hero from './component/Hero'
import Award from './component/Award'
import Philosophy from './component/Philosophy'
import Benifit from './component/Benifit'
import Footer from './component/Footer'

const App = () => {
  return (
    <main className='min-h-screen w-full overflow-x-hidden'>
      <Hero />
      <Award />
      <Philosophy />
      <Benifit />
      <Footer />

      {/* <div className="h-screen w-full">hi</div> */}
    </main>
  )
}

export default App
