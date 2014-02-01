var map = L.mapbox.map('map', 'elliottmunoz.b4ie8kt9')
    .setView([39.792, -104.9888], 11);
var geoJson = [{
    "type": "Feature",
        "geometry": {
        "type": "Point",
            "coordinates": [-104.841667, 39.833332]
    },
        "properties": {
        "title": "Rocky Mountain Arsenal National Wildlife Refuge",
            "description": "",
            "icon": {
            "iconUrl": "http://f.cl.ly/items/3g3u1y1H0V0v3r0b2U3E/x.png",
                "iconSize": [31, 31],
                "iconAnchor": [15, 15],
                "popupAnchor": [0, -21],
                "className": "marker"
        }
    }
}];

// Set a custom icon on each marker based on feature properties
map.markerLayer.on('layeradd', function (e) {
    var marker = e.layer,
        feature = marker.feature;

    marker.setIcon(L.icon(feature.properties.icon));
});

// Add features to the map
map.markerLayer.setGeoJSON(geoJson);