import { Suspense, useState } from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import type { Data } from '../Components/Types/type'


function App() {
  
  
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
