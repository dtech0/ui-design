import { Suspense, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from '../Components/Navbar'
import type { Data } from '../Components/Types/type'
import Tech from '../Components/Tech'
import Hero from '../Components/Hero'
import YourStack from '../Components/YourStack'
import Footer from '../Components/Footer'
const Technology = async (): Promise<Data[]> => {
  const res = await fetch('/data.json')
  const data = await res.json()
  return data
}
const Techpromise = Technology()
function App() {
  
  const [selected, setSelected] = useState<Data[]>([])

  const handleSelect = (tech: Data) => {
    if (!selected.find(t => t.id === tech.id)) {
      setSelected([...selected, tech])
      toast.success(`${tech.name} added to your stack!`)
    } else {
      toast.info(`${tech.name} is already in your stack!`)
    }
  }
  const handleremove = (id: string) => {
    const item = selected.find(t => t.id === id)
    setSelected(selected.filter(t => t.id !== id))
    if (item) {
      toast.error(`${item.name} removed from your stack!`)
    }
  }
  const handleClear = () => {
    if (selected.length === 0) return
    setSelected([])
    toast.warn('All technologies removed from your stack!')
  }
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{
          ['--toastify-color-progress-light' as any]: '#e306a8ff',
          ['--toastify-color-progress-success' as any]: '#f9a8d4',
          ['--toastify-color-progress-error' as any]: '#e10ac8ff',
          ['--toastify-color-progress-warning' as any]: '#f9a8d4',
          ['--toastify-color-progress-info' as any]: '#f9a8d4',
        }}
        toastClassName="!rounded-2xl !border-2 !border-[#e60067] !border-solid !shadow-lg !bg-white !text-gray-800 !font-medium !overflow-hidden"
        toastStyle={{
          border: '2px solid #e60067',
          borderRadius: '16px',
          overflow: 'hidden',
        }}
        progressClassName="!bg-pink-300 !h-1"
      />
      <Navbar />
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div id="technologies" className="mb-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Explore the{" "}
            <span className="text-[#e60067]">Technologies</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-2">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          <div className="lg:col-span-3">
            <Suspense fallback={<div>loading</div>}>
              <Tech TechData={Techpromise}
                add={handleSelect}
                selectedtech={selected}

              />
            </Suspense>
          </div>
          <div className="lg:col-span-1">
            <YourStack
              selectedStack={selected}
              onRemove={handleremove}
              onRemoveAll={handleClear}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
