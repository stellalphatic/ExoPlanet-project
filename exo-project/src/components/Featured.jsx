import React from 'react';

function FeaturedExoplanets() {
  const featuredExoplanets = [
    { name: "Kepler-452b", distance: "1,400 light-years", size: "1.6 times Earth's size" },

  ];

  return (
    <section className="featured-exoplanets">
      <h2>Featured Exoplanets</h2>
      {featuredExoplanets.map((exoplanet) => (
        <div className="featured-exoplanet" key={exoplanet.name}>
          <h3>{exoplanet.name}</h3>
          <p>Distance: {exoplanet.distance}</p>
          <p>Size: {exoplanet.size}</p>
        </div>
      ))}
    </section>
  );
}

export default FeaturedExoplanets;