import { use } from "react";
import type { Data } from "./Types/type";
interface dataProps{
  TechData:Promise<Data[]>
   
    }
    export default function Tech({ TechData }:dataProps) {
    const showdata=use(TechData)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {showdata.map((tech: Data) => {
              return (
                <div
                  key={tech.id} 
                  className={`rounded-2xl p-5 shadow-xs 
                     bg-white flex flex-col justify-between transition-all duration-150
                     `}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-8 h-8 object-contain"
                      />
                      <span className="bg-sky-50 text-sky-600 text-xs font-semibold px-3 py-1 rounded-full">
                        {tech.badge}
                      </span>
                    </div>

                    <h2 className="text-lg font-bold mt-2">{tech.name}</h2>
                    <p className="text-gray-500 text-sm mt-1">{tech.description}</p>
                    <div className="mt-3 flex items-center justify-between text-xs text-gray-600">
                      <span className="bg-gray-100 px-2 py-1 rounded font-medium">
                        {tech.category}
                      </span>
                      <span className="bg-gray-100 px-2 py-1 rounded">
                        {tech.difficulty}
                      </span>
                      <span>⭐ {tech.rating}</span>
                    </div>
                    <button
                      type="button"
                      
                      className={`w-full mt-4 text-sm font-semibold py-3 rounded-xl transition duration-150 shadow-xs cursor-pointer
                      `}
                    >
                      Add to Stack
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
    )
    
}