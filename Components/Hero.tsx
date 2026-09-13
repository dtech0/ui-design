  import heroImg from '/assets/banner-stack.png'

  export default function Hero() {
    return (
        <section className="pt-6 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                   <div>
                     <h1 className="text-4xl md:text-5xl font-bold mb-4">Build Your Ideal <br />
                      <span className="bg-gradient-to-r from-[#f97316] via-[#ec4899] to-[#8b5cf6] bg-clip-text text-transparent">
                       Development Stack
                      </span>
                     </h1>
                     <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
                        Explore frontend, backend, database, and tooling options, compare them
                        side by side, and put together the stack that fits your next project.
                     </p>
                     <div className="mt-8 flex flex-wrap items-center gap-4">
                        <a
                          href="#technologies"
                          className="bg-gradient-to-r from-[#e60067] to-[#f43f5e] hover:opacity-95 text-white font-medium px-7 py-3.5 rounded-xl shadow-xs transition duration-150 cursor-pointer"
                        >
                         Explore Technologies
                        </a>
                        <button
                          type="button"
                          className="border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 font-medium px-7 py-3.5 rounded-xl transition duration-150 cursor-pointer"
                        >
                          Learn More
                        </button>
                     </div>
                   </div>
                   <div className="flex justify-center lg:justify-end">
                            <img
                                src={heroImg}
                                alt="Development Stack"
                                className="w-full max-w-xs sm:max-w-sm lg:max-w-[400px] object-contain drop-shadow-2xl"
                            />
                         </div>
              </div>
              </div>
        </section>      
    )
}