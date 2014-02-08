
/*
var geo = [];
    
var markers=[];
markers[0]=["New WCS Anti-Poaching", "http://f.cl.ly/items/1r151p1d1e0B3U2K2g3r/marker_red.png"];
markers[1]=["Ongoing WCS Anti-Poaching and Anti-Trafficking", "http://f.cl.ly/items/3v1z1M0q3l1L3t0M041p/marker_white.png"];
markers[2]=["Enhancing Partners' Anti-Poaching", "http://f.cl.ly/items/3p0J17431c1q2M0K2i3Q/marker_olive.png"];

var locations = [];
locations[0] = ["Abuja, Nigeria", 7.178000, 9.187870, markers[1]];
locations[1] = ["Boma, South Sudan", 34.466702, 6.166670, markers[1]];
locations[2] = ["Brazzaville, Congo", 15.289910, -4.255020, markers[1]];
locations[3] = ["Conkouati-Douli National Park", 11.470000, -3.905000,  markers[1]];
locations[4] = ["Cross River-Takamanda", 9.348800, 6.159400, markers[1]];
locations[5] = ["Dzanga-Sangha", 16.333332, 3.100000,  markers[2]];
locations[6] = ["Ivindo", 12.845000, 0.563889,  markers[0]];
locations[7] = ["Libreville, Gabon",9.457380, 0.393460, markers[1]];
locations[8] = ["Mbam et Djerem National Park", 12.750000, 5.833333, markers[1]];
locations[9] = ["Minkébé National Park", 12.759503, 1.679772,  markers[2]];
locations[10] = ["Niassa", 36.461803, -13.059384, markers[0]];
locations[11] = ["Nouabalé-Ndoki National Park", 16.450001, 2.466667,  markers[1]];
locations[12] = ["Odzala, Gabon", 13.777800, -0.334730,  markers[2]];
locations[13] = ["Okapi Faunal Reserve", 28.546000, 1.718329, markers[0]];
locations[14] = ["Pemba", 40.490398, -12.963500, markers[1]];
locations[15] = ["Pointe-Noire, Congo", 11.865920, -4.778850, markers[1]];
locations[16] = ["Ruaha National Park", 34.621601, -7.474559, markers[0]];
locations[17] = ["Selous Game Reserve", 37.372066, -8.794423, markers[2]];
locations[18] = ["Southern N.P.", 28.679956, 6.473515, markers[1]];
locations[19] = ["Tarangire", 36.016701, -3.533330, markers[1]];
locations[20] = ["Wonga Wongue National Park", 9.5, -.416667,  markers[2]];
locations[21] = ["Yankari", 10.496394, 9.815568, markers[1]];
locations[22] = ["Zakouma National Park", 19.692678, 10.850037, markers[2]];


function setMarkers() {
    for (i = 0; i < locations.length; i++) {
        geo.push({
            "type": "Feature",
                "geometry": {
                "type": "Point",
                "coordinates": [locations[i][1], locations[i][2]]
            },
                "properties": {
                "title": locations[i][0],
                    "description": "",
                    "icon": {
                    "iconUrl": locations[i][3][1],
                    "iconSize": [31, 31],
                    "iconAnchor": [15, 15],
                    "popupAnchor": [0, -21],
                    "className": "marker"
                }
            }
        });
    }
}

setMarkers();
*/

var map = L.mapbox.map('map', 'elliottmunoz.h1h555k8')
    .setView([6.534, 15.161], 5);


var markerLayer = L.mapbox.markerLayer()
    .loadURL('/mapbox/assets/javascripts/wcs.geojson')
    .addTo(map);
//var geoJson = setMarkers();
/*
var geoJson={
  "type": "FeatureCollection",
  "features": [
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          7.178,
          9.18787
        ]
      },
      "type": "Feature",
      "properties": {
        "Name": "Abuja, Nigeria",
        "description": "",
        "icon": {
          "iconUrl": "http://f.cl.ly/items/3v1z1M0q3l1L3t0M041p/marker_white.png",
          "iconSize": [
            31,
            31
          ],
          "iconAnchor": [
            15,
            15
          ],
          "popupAnchor": [
            0,
            -21
          ],
          "className": "marker"
        }
      }
    }
  ]
}
*/

// Set a custom icon on each marker based on feature properties
map.markerLayer.on('layeradd', function (e) {
    var marker = e.layer,
        feature = marker.feature;
    marker.setIcon(L.icon(feature.properties.icon));
});

/*
function respond(x){
    if(x>=640){
      map.setZoom(5);
    }
    if(x<640){
      map.setZoom(4);
    }
    if(x<320){
      map.setZoom(3);
    }
}


map.on('resize', function() {
    var dimensions=map.getSize();
    var width=dimensions.x;
    respond(width);
});
*/


// Add features to the map
map.markerLayer.setGeoJSON(markerLayer);