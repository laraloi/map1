document.addEventListener('DOMContentLoaded', function () {
  var mapContainer = document.getElementById('map');
  mapContainer.style.height = window.innerHeight + 'px';

  L.mapbox.accessToken = 'pk.eyJ1IjoibGFyYWxvaSIsImEiOiJGWVpVX2h3In0.En5LJ8eIRFPK0HfdUeVASQ';

  drawMap();
});


function drawMap () {
  var canvasTiles = L.tileLayer.canvas();
  var map = L.mapbox.map('map', 'laraloi.8b0a25e2').setView([1.3354973, 103.7595641], 12);

  L.canvasOverlay().drawing(drawPoints).addTo(map);
}

function drawPoints (canvasOverlay, params) {
  var ctx = params.canvas.getContext('2d');
  ctx.clearRect(0, 0, params.canvas.width, params.canvas.height);


  ctx.beginPath();
  points.map(function (d, i) {
    dot = canvasOverlay._map.latLngToContainerPoint( [d[0], d[1]] );
    ctx.lineTo(dot.x, dot.y);
  });
  ctx.strokeStyle = '#ff0000';

  ctx.stroke();
}