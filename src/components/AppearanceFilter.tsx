import { useState, useMemo } from "react";
import { appearanceKey } from "../data/species-data";

interface Props {
    setFilter: (value:number) => void,
    totalSpecies: number
}

export default function AppearanceFilter({ setFilter, totalSpecies }:Props) {
    const [filterOpen, setFilterOpen] = useState(false);
    const [currentFilter, setCurrentFilter] = useState(0);

    const updateSelected = (newFilter:number) => {
        setCurrentFilter(newFilter);
        setFilter(newFilter);
        setFilterOpen(false);
    }

    const filterSvg = useMemo(() => {
        return (
        <svg height="20" viewBox="0 0 1792 1792" width="20" xmlns="http://www.w3.org/2000/svg" fill="white">
            <path d="M1595 295q17 41-14 70l-493 493v742q0 42-39 59-13 5-25 5-27 0-45-19l-256-256q-19-19-19-45v-486l-493-493q-31-29-14-70 17-39 59-39h1280q42 0 59 39z"/>
        </svg>
        );
    }, []);

    const filterList = () => {
        return (
            <div className="bg-medium-grey text-left p-4 pt-8 w-55 rounded-lg rounded-tr-none absolute right-0 transition-all duration-500">
                {appearanceKey.map((option) => (
                  <div key={option.key} className={`cursor-pointer ${currentFilter === option.key ? "text-white" : "text-light-grey"}`} onClick={() => updateSelected(option.key)}>
                    {currentFilter === option.key && <span className="[text-shadow:0_0_3px_white]">{" | "}</span>}
                    {option.name + ((option.key === 0) ? ` (${totalSpecies})` : '')}
                  </div>
              ))}
            </div>
        )
    }

    return (
      <div>
        <div role="button" className={`border-2 border-medium-grey rounded-4xl fixed p-2 w-10 right-6 top-6 z-20 cursor-pointer flex items-center transition-all duration-500 ${filterOpen || (currentFilter !== 0) ? 'w-52.5 justify-between gap-2.5 transition-all duration-500' : 'justify-end'} ${(currentFilter !== 0) ? 'bg-light-grey' : 'bg-black'}`} onClick={() => setFilterOpen(prev => !prev)}>
          {(filterOpen || (currentFilter !== 0)) && (
            <div className="text-white pl-2.5 whitespace-nowrap overflow-hidden">
              {currentFilter > 0 ? appearanceKey[currentFilter].name : "Filter..."}
            </div>
          )}
          {filterSvg}
        </div>
        {filterOpen && filterList()}
      </div>
    )
}