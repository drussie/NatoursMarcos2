/* eslint-disable */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiZHJ1c3NpZSIsImEiOiJjbGd1dXJrajYxNnN4M3FzOGtsODB5bWd0In0.xlIwFiS3Zpe8qDvM46HEzQ";

  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/drussie/clguvgveu002j01r82m2ieh3z",
    scrollZoom: false,
    //   center: [-118.514687, 34.0414],
    //   zoom: 10,
    //   interactive: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement("div");
    el.className = "marker";

    //Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: "bottom",
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include the current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
