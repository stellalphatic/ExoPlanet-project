import Carousel from './carousel.jsx'

function App() {
  const exoplanets = [
    {
      id: 1,
      name: "Kepler-452b",
      image: "path/to/image1.jpg",
      description: "A potentially habitable exoplanet similar in size to Earth.",
    },
    // Add more exoplanets here
  ];

  return (
    <div>
      <Carousel exoplanets={exoplanets} />
    </div>
  );
}