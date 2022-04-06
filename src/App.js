import { Route, Routes, Navigate } from 'react-router';
import './App.css';
import Home from "./components/Home"
import PokemonDetails from "./components/PokemonDetails"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/pokemon/:name" element={<PokemonDetails />} />
        <Route path="*" element={<Navigate to="/home" replace/>} />
      </Routes>
    </div>
  );
}

export default App;