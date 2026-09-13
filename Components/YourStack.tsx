import type { Data } from './Types/type'
interface  props{
   selectedStack:Data[];
  onRemove: (id: string) => void;
   onRemoveAll: () => void;
}
function YourStack({selectedStack,onRemove, onRemoveAll}:props) {
    const length=selectedStack.length
  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-xs">
      <h3 className="text-xl font-bold text-gray-900">Your Stack</h3>
      <p className="text-slate-400 text-sm mt-1">
        {length === 0
          ? 'No technologies selected yet.'
          : `${length} Technology Selected`}
      </p>
      <div className="mt-5 space-y-3">
        {length === 0 ? (
          <div className="border border-dashed border-slate-300 rounded-2xl py-11 text-center text-slate-400 text-sm font-normal">
            Your stack is empty.
          </div>
        ) : (
          selectedStack.map((item) => (
            <div
              key={item.id}
              className="border border-gray-100 rounded-2xl p-3 flex items-center justify-between shadow-xs bg-white hover:border-gray-200 transition"
            >
              <div className="flex items-center space-x-3">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-8 h-8 object-contain"
                />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{item.name}</h4>
                  <span className="text-[11px] text-gray-400 font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => onRemove(item.id)}
                className="text-gray-400 hover:text-gray-600 p-1 cursor-pointer transition text-base font-bold"
                aria-label="Remove"
              >
                ✕
              </button>
            </div>
          ))
        )}
        {length > 0 && (
          <button
            type="button"
            onClick={onRemoveAll}
            className="w-full mt-4 border border-gray-200 hover:border-red-300 text-red-600 hover:bg-red-50 font-semibold py-2.5 rounded-xl text-sm transition cursor-pointer"
          >
            Remove All
          </button>
        )}
      </div>
    </div>
  )
}

export default YourStack
