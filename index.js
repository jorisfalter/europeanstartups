const geojson = data


mapboxgl.accessToken = 'pk.eyJ1Ijoiam9yaXNib3JpcyIsImEiOiJjbDA3ajF3d3IxOW00M2RueTF1ZXR0dnJlIn0.bZdaW_lcWxw_mGuN4uq82g';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [5, 56],
  zoom: 3
});

// code from the next step will go here!

// add markers to map
for (const feature of geojson.features) {
  // create a HTML element for each feature
  const el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).setPopup(
    new mapboxgl.Popup({
      offset: 25
    }) // add popups
    .setHTML(
      `<img src=${feature.properties.pics} width="200">
      <h3>${feature.properties.title}</h3>
      <p><i class="fa fa-bullseye" aria-hidden="true"></i>${" " + feature.properties.description}</p>
      <p><i class="fas fa-users"></i>${" Employees " + feature.properties.employees}</p>
      <p><i class="fas fa-play"></i>${" Founded " + feature.properties.founded}</p>
      <p><a href=${feature.properties.about} target="_blank">About ${feature.properties.title}</a></p>`
    )
  ).addTo(map);
}
