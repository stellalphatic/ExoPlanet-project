import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon } from 'lucide-react';

const exoplanets = [
  {
    id: '6702746dea14fb899f49c7a5',
    name: 'EPIC 220674823 c',
    distance: 244.59,
    density: 2.12,
    temp: 805,
    mass: 8.9,
    radius: 2.836,
    flux: 70,
    period: 13.3397,
    eccentricity: 0.13,
    gravity: 10.84435258,
    esi: 0.23523564,
    habitability_score: 21.761782,
    habitable: false,
    surface_type: 'Ice Giant',
    image: 'https://svs.gsfc.nasa.gov/vis/a010000/a013200/a013266/tess_gj357_english_thm.jpg',
  },
  {
    id: '6702746dea14fb899f49c7a6',
    name: 'Kepler-442b',
    distance: 1206,
    density: 5.5,
    temp: 233,
    mass: 2.36,
    radius: 1.34,
    flux: 0.7,
    period: 112.3053,
    eccentricity: 0.04,
    gravity: 13.1,
    esi: 0.84,
    habitability_score: 78.5,
    habitable: true,
    surface_type: 'Rocky Super-Earth',
    image: 'https://svs.gsfc.nasa.gov/vis/a010000/a013200/a013297/LHS3844b_Still_print.jpg',
  },
  {
    id: '6702746dea14fb899f49c7a7',
    name: 'TRAPPIST-1e',
    distance: 39.6,
    density: 5.65,
    temp: 251,
    mass: 0.77,
    radius: 0.92,
    flux: 0.662,
    period: 6.1,
    eccentricity: 0.005,
    gravity: 9.12,
    esi: 0.85,
    habitability_score: 82.3,
    habitable: true,
    surface_type: 'Rocky Earth-like',
    image: 'https://images-assets.nasa.gov/image/PIA22069/PIA22069~large.jpg?w=1920&h=1080&fit=clip&crop=faces%2Cfocalpoint',
  },
  {
    name: "K2-3 d",
    distance: 44.0727,
    density: 2.1,
    temp: 312,
    mass: 1.6,
    radius: 1.62,
    flux: 1.6,
    period: 44.556456,
    eccentricity: 0.097,
    gravity: 5.974698979,
    esi: 0.81426382,
    habitability_score: 60.713191,
    habitable: true,
    surface_type: "Ice Giant",
    image: 'https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000132/GSFC_20171208_Archive_e000132~large.jpg?w=1920&h=1080&fit=clip&crop=faces%2Cfocalpoint',
  },
  {
    name: "TOI-1452 b",
    distance: 30.5212,
    density: 5.6,
    temp: 326,
    mass: 4.82,
    radius: 1.672,
    flux: 1.8,
    period: 11.06201,
    eccentricity: 0.0,
    gravity: 16.89664843,
    esi: 0.72006129,
    habitability_score: 76.0030645,
    habitable: true,
    surface_type: "Rocky",
    image: 'https://science.nasa.gov/wp-content/uploads/2023/06/Illustration_of_icy_world_orbiting_distant_star-jpeg.webp?w=2048&format=webp',
  }
];

const ExoplanetCard = ({ planet }) => {
  const [showDetails, setShowDetails] = useState(false);

  const habitabilityColor = planet.habitable ? 'bg-green-500' : 'bg-red-500';
  const surfaceTypeColor = planet.surface_type === 'Rocky Earth-like' ? 'bg-blue-500' : 
                           planet.surface_type === 'Rocky Super-Earth' ? 'bg-indigo-500' : 'bg-purple-500';

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-80 flex flex-col">
      <img src={planet.image} alt={planet.name} className="w-full h-40 object-cover" />
      <div className="p-4 flex-grow overflow-y-auto">
        <h2 className="text-2xl font-bold text-white mb-2">{planet.name}</h2>
        <div className="flex space-x-2 mb-2">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${habitabilityColor}`}>
            {planet.habitable ? 'Potentially Habitable' : 'Not Habitable'}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${surfaceTypeColor}`}>
            {planet.surface_type}
          </span>
        </div>
        <p className="text-gray-300 mb-2">ESI: {planet.esi.toFixed(2)}</p>
        <p className="text-gray-300 mb-2">Distance: {planet.distance} light years</p>
        <button 
          onClick={() => setShowDetails(!showDetails)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-2"
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        {showDetails && (
          <div className="bg-gray-700 p-4 text-white rounded">
            <p className="mb-1">Mass: {planet.mass} Earth masses</p>
            <p className="mb-1">Radius: {planet.radius} Earth radii</p>
            <p className="mb-1">Gravity: {planet.gravity.toFixed(2)} m/s²</p>
            <p className="mb-1">Temperature: {planet.temp} K</p>
            <p className="mb-1">Orbital Period: {planet.period} days</p>
            <p className="mb-1">Eccentricity: {planet.eccentricity}</p>
            <p className="mb-1">Density: {planet.density} g/cm³</p>
            <p className="mb-1">Flux: {planet.flux} Earth fluxes</p>
            <p className="mb-1">Habitability Score: {planet.habitability_score.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default function ExoplanetExplorer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredPlanets = exoplanets.filter(planet => 
    planet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === filteredPlanets.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? filteredPlanets.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-gray-800 bg-opacity-80 rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">Exoplanet Explorer</h1>
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search exoplanets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-700 text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <SearchIcon className="absolute left-3 top-2.5 text-gray-400" />
        </div>
        <div className="relative">
          <div className="flex justify-center items-center">
            {filteredPlanets.length > 0 ? (
              <ExoplanetCard planet={filteredPlanets[currentIndex]} />
            ) : (
              <p className="text-white text-xl">No planets found</p>
            )}
          </div>
          {filteredPlanets.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}