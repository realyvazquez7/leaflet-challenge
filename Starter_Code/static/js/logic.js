// Create a map centered at a specific location
var map = L.map('map').setView([37.7749, -122.4194], 5); // San Francisco, zoom level 5

// Add a tile layer (OpenStreetMap tiles)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Fetch earthquake data from USGS
d3.json('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson').then(function(data) {
    visualizeData(data);
});

function visualizeData(data) {
    data.features.forEach(function(earthquake) {
        var coords = earthquake.geometry.coordinates;
        var latLng = [coords[1], coords[0]];
        var magnitude = earthquake.properties.mag;
        var depth = coords[2];
        var place = earthquake.properties.place;

        // Create a circle marker
        var marker = L.circleMarker(latLng, {
            radius: magnitude * 2,
            fillColor: getColor(depth),
            color: '#000',
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        }).addTo(map);

        // Add a popup
        marker.bindPopup(`<h3>${place}</h3><p>Magnitude: ${magnitude}</p><p>Depth: ${depth} km</p>`);
    });

    // Add legend
    addLegend();
}

// Function to determine marker color based on depth
function getColor(depth) {
    return depth > 90 ? '#FF0000' :
           depth > 70 ? '#FF4500' :
           depth > 50 ? '#FFA500' :
           depth > 30 ? '#FFD700' :
           depth > 10 ? '#ADFF2F' :
                        '#00FF00';
}

function addLegend() {
    var legend = L.control({ position: 'bottomright' });

    legend.onAdd = function(map) {
        var div = L.DomUtil.create('div', 'info legend'),
            depths = [0, 10, 30, 50, 70, 90],
            labels = [];

        div.innerHTML += '<strong>Depth (km)</strong><br>';
        for (var i = 0; i < depths.length; i++) {
            div.innerHTML +=
                '<i style="background:' + getColor(depths[i] + 1) + '"></i> ' +
                depths[i] + (depths[i + 1] ? '&ndash;' + depths[i + 1] + '<br>' : '+');
        }
        return div;
    };

    legend.addTo(map);
}
