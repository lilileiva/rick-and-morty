import './App.scss';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import CharactersList from './components/CharactersList/CharactersList';
import CharacterDetails from './components/CharacterDetails/CharacterDetails';
import EpisodesList from './components/EpisodesList/EpisodesList';
import EpisodeDetails from './components/EpisodeDetails/EpisodeDetails';
import LocationsList from './components/LocationsList/LocationsList';
import LocationDetails from './components/LocationDetails/LocationDetails';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personajes" element={<CharactersList />} />
        <Route path="/personajes/:characterId" element={<CharacterDetails />} />
        <Route path="/episodios" element={<EpisodesList />} />
        <Route path="/episodios/:episodeId" element={<EpisodeDetails />} />
        <Route path="/ubicaciones" element={<LocationsList />} />
        <Route path="/ubicaciones/:locationId" element={<LocationDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
