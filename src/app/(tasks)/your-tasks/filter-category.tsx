import { Bold, Italic, Underline } from "lucide-react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const filterItem = [
    "Design",
    "Dev",
  "Prototype",
  "Testing",
   "Research",
    "Urgency",
]
const  FilterCategory = () =>  {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const toggleFilter = (category: string) => {
    setSelectedFilters((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="w-[2/3] mr-24">
     <div className="grid grid-cols-3 gap-4">
        {filterItem.map((category ) => (
          <button
            key={category}
            onClick={() => toggleFilter(category)}
            className={`px-4 py-2 rounded-full border  text-sm transition-all
              ${
                selectedFilters.includes(category)
                  ? "bg-purple-600 text-white"
                  : "border-gray-400 text-gray-700 hover:bg-gray-200"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

    {/* <div className="">
    <div className="flex flex-wrap gap-3"> 
    {
        filterItem.map((item, i) => (
              <Button
               className="rounded-lg"
                key={i}
                onClick={() => t}
                >
                  {item.name}
              </Button>
        ))
    }
      </div>
    </div> */}
    </div>
  )
}
export default FilterCategory;

// flex flex-wrap flex-grow-0  gap-3


