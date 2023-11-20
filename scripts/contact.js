mapboxgl.accessToken =
  "pk.eyJ1IjoicmFodWw3MjkyNSIsImEiOiJjbHA1bmdja2wxbnEzMmtxeXY2bHJtd2xkIn0.2QzHGLF2nR8Z35CFEuUfJQ";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: [-73.5804, 45.53483], // starting position
  zoom: 9, // starting zoom
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());
