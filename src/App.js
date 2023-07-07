import './App.scss';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import CharactersList from './components/CharactersList/CharactersList';
import CharacterDetailsWrapper from './components/CharacterDetails/CharacterDetails';
import EpisodesList from './components/EpisodesList/EpisodesList';
import EpisodeDetailsWrapper from './components/EpisodeDetails/EpisodeDetails';
import LocationsList from './components/LocationsList/LocationsList';
import LocationDetailsWrapper from './components/LocationDetails/LocationDetails';
import NotFound from './components/NotFound/NotFound';
import CharactersProvider from './context/CharactersProvider';
import LocationsProvider from './context/LocationsProvider';
import EpisodesProvider from './context/EpisodesProvider';


function App() {
  return (
    <CharactersProvider>
      <LocationsProvider>
        <EpisodesProvider>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/personajes" element={<CharactersList />} />
              <Route path="/personajes/:characterId" element={<CharacterDetailsWrapper />} />
              <Route path="/episodios" element={<EpisodesList />} />
              <Route path="/episodios/:episodeId" element={<EpisodeDetailsWrapper />} />
              <Route path="/ubicaciones" element={<LocationsList />} />
              <Route path="/ubicaciones/:locationId" element={<LocationDetailsWrapper />} />
              <Route path="*" element={<NotFound />} />              
            </Routes>            
          </div>
        </EpisodesProvider>
      </LocationsProvider>
    </CharactersProvider>
  );
}

export default App;
