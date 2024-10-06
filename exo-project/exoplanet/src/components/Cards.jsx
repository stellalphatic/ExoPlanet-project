import React from 'react'

function Cards() {
  return (
    <div id="cards-container">
                <div class="card" id="card1">
                    <div class="overlay">
                        <h3>What are Exoplanets?</h3>
                        <p>Exoplanets are planets that orbit stars outside our Solarsystem.They vary in size,composition,and temperature, from massive gas giants to smaller rocky worlds similar to Earth.
                

                        </p>
                    </div>
                </div>
                <div class="card" id="card2">
                    <div class="overlay">
                        <h3>Can life exist there?</h3>
                        <p>Many of these exoplanets are inhospitable to life due to extreme temperatures, high radiation, or lack of atmosphere. However, a small number of exoplanets may have conditions suitable for life, such as moderate temperatures, the presence of water, and a stable atmosphere.
                        </p>
                    </div>
                </div>
                <div class="card" id="card3">
                    <div class="overlay">
                        <h3>How to predict Habitability?</h3>
                        <p>To predict the habitability of a planet,we need to know some key factors including: The planet's mass and Radius, planet's distance from its star, atmospheric composition, presence of liquid water, surface temperature, radiation levels, eccentricity, and geological activity.
                        </p>
                    </div>
                </div>
            </div>
  )
}

export default Cards