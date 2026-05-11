import { useState, useMemo } from 'react';
import Header from './components/header';
import AppearanceFilter from './components/AppearanceFilter';
import ImageList from './components/ImageList';
import ObscurityFilter from './components/ObscurityFilter';
import { species } from './data/species-data';
import type { ListItem } from './types';

function App() {
  const [search, setSearch] = useState("");
  const [obscurityLevel, setObscurityLevel] = useState(5);
  const [appearanceFilter, setAppearanceFilter] = useState(0);

  const totalSpecies = species.length;

  const filterSpecies = useMemo(() => {
    return species
      .filter((species:ListItem) => species.obscurity <= obscurityLevel)
      .filter((species:ListItem) => (search === '' || species.name.startsWith(search.toUpperCase())))
      .filter((species:ListItem) => appearanceFilter === 0 || species.appearance === appearanceFilter)
  }, [search, obscurityLevel, appearanceFilter]);

  return (
    <>
      <Header />
      <AppearanceFilter setFilter={setAppearanceFilter} totalSpecies={totalSpecies} />
      <div className="pt-8 flex items-center justify-center flex-wrap gap-5">
        <input type="text" placeholder='Search' onChange={(e) => setSearch(e.target.value)} className="p-1 border-2 border-medium-grey rounded-[3px] bg-black text-white appearance-none outline-none focus:border-white focus:border-2 bg-[url('https://static-mh.content.disney.io/matterhorn/assets/starwars/navigation/SW_Nav_Search-74ab820c48e2.svg')] bg-no-repeat bg-[position:10px] pl-10"/>
        <ObscurityFilter initialObscurity={obscurityLevel} setObscurity={setObscurityLevel}/>
      </div>
      <ImageList list={filterSpecies} />
    </>
  );
}

export default App;
