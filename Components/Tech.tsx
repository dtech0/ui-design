import { use } from "react";
import type { Data } from "./Types/type";
interface dataProps{
  TechData:Promise<Data[]>
   add: (tech:Data) => void,
   selectedtech: Data[]
}
export default function Tech({ TechData,add,selectedtech }:dataProps) {
    const showdata=use(TechData)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {showdata.map((tech: Data) => {
              const isSelected = selectedtech.filter((t) => t.id === tech.id).length>0;
              return (
                <div
                  key={tech.id} 
                  className={`rounded-2xl p-5 shadow-xs 
                     bg-white flex flex-col justify-between transition-all duration-150
                     ${isSelected
                         ? "border-2 border-pink-200 bg-pink-50"
                         : "border border-gray-100 hover:border-gray-200"
                     }`}
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
                      onClick={() => add(tech)}
                      disabled={isSelected}
                      className={`w-full mt-4 text-sm font-semibold py-3 rounded-xl transition duration-150 shadow-xs cursor-pointer
                        ${isSelected
                            ? "bg-white text-gray-400 border border-gray-200 cursor-not-allowed opacity-70"
                            : "bg-gradient-to-r from-[#e60067] to-[#f43f5e] hover:opacity-95 text-white"
                        }
                      `}
                    >
                      {isSelected ? "✓ Added to Stack" : "Add to Stack"}
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
    )
    
}