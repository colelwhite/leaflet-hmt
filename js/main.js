//♥*♡∞:｡.｡｡･ﾟﾟ･.・゜゜・✧･ﾟ: *✧･ﾟ:* *:･ﾟ✧*:･ﾟ✧・゜゜・．･ﾟﾟ･｡｡.｡:∞♡*♥
//
// Name: main.js
// By: Nicole White January 2019
// Purpose: Javascript for Leaflet web map.
//
//♥*♡∞:｡.｡｡･ﾟﾟ･.・゜゜・✧･ﾟ: *✧･ﾟ:* *:･ﾟ✧*:･ﾟ✧・゜゜・．･ﾟﾟ･｡｡.｡:∞♡*♥


// Define functions
// Function: onEachFeature function for trail segment pop-ups
function onEachFeatureTrail(feature, layer) {

    layer.on({
      click: function(e) {
        legendTitle.innerHTML = feature.properties.name
        legendBody.innerHTML = feature.properties.desc
        document.getElementById("li1").innerHTML = '<b>Segment Length:</b> ' + feature.properties.length + ' metres'
        document.getElementById("li2").innerHTML = '<b>Managing Entity:</b> ' + feature.properties.manager
        document.getElementById("li3").innerHTML = '<b>Uses:</b> ' + feature.properties.usage
        document.getElementById("li4").innerHTML = '<b>Average Daily Users:</b> ' + feature.properties.avedaily
        document.getElementById("li5").innerHTML = '<b>Peak Daily Use:</b> ' + feature.properties.peakdaily
        document.getElementById("li6").innerHTML = '<b>Pedestrian Traffic:</b> ' + feature.properties.pedpercent + '%'
        document.getElementById("li7").innerHTML = '<b>Cyclist Traffic:</b> ' + feature.properties.cycpercent + '%'
        document.getElementById("li8").innerHTML = '<b>Monthly Users:</b> ' + feature.properties.monthlyuse
        document.getElementById("li8").innerHTML = '<b>Adjusted Annual User Count:</b> ' + feature.properties.adjustedan

      }
    })

}



// Function: Style trail lines by varying lineweight according to ave daily
// users
function usercountStyle(feature) {
  var lineWeightToUse;
  // var line = feature.properties.usercoun21;

  // if (line < 125) lineWeightToUse = 0.5;
  // else if (line >= 125 && line < 170) lineWeightToUse = 2.5;
  // else if (line >= 170 && line < 215) lineWeightToUse = 3;
  // else if (line >= 215 && line < 250) lineWeightToUse = 3.5;
  // else if (line >= 250 && line < 300) lineWeightToUse = 4;
  // else if (line >= 300 && line < 350) lineWeightToUse = 4.5;
  // else if (line >= 350 && line < 400) lineWeightToUse = 5;
  // else if (line >= 400 && line < 475) lineWeightToUse = 5.5;
  // else if (line >= 475) lineWeightToUse = 6;
  // else lineWeightToUse = 1;

  lineWeightToUse = 2.5;

  return {
    "color": "#0d8141",
    "weight": lineWeightToUse,

  };
}

function townStyle(feature) {
  var labelToUse;

  return {
    "color": "#0d8141",
    "icon": divIcon,

  };
}

// Use style defined in main.css for custom icon
var trailHeadIcon = L.divIcon({ className: 'circle'})
// var myLine = L.Path({ className: 'my_polyline'})

// Declare variables
var map = L.map('map', { minZoom:9, maxZoom:19, zoomControl:false })
    .setView([44.885666, -65.168095], 9);

// CLUSTER
var markers = L.markerClusterGroup();

// Basemap
var basemap =
    L.tileLayer('https://api.mapbox.com/styles/v1/nicoleleewhite/cjrifqgs202ut2to6n10ozddh/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoibmljb2xlbGVld2hpdGUiLCJhIjoiY2pyYzRwcDVzMDB0NTN5cWt1aXozYTN1ZSJ9.tTpLvFcAuaECgogHT0CYsg', {
    attribution: 'Map tiles by MapBox',
    maxZoom: 19,
    subdomains: 'abcd'
}).addTo(map);

// A second basemap to be used as keymap
var basemap2 =
    L.tileLayer('https://api.mapbox.com/styles/v1/nicoleleewhite/cjrh4rtd500zy2sr13seksbzz/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoibmljb2xlbGVld2hpdGUiLCJhIjoiY2pyYzRwcDVzMDB0NTN5cWt1aXozYTN1ZSJ9.tTpLvFcAuaECgogHT0CYsg', {
    attribution: 'Map tiles by MapBox',
    maxZoom: 19,
    subdomains: 'abcd'
})

// var basemap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// 	maxZoom: 19,
// 	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// });
//
// var basemap2 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// 	maxZoom: 19,
// 	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// });

// Keymap
var lilmap = new L.Control.MiniMap(basemap2, { toggleDisplay: true }).addTo(map);




// Configure icons
var lightIcon = L.icon({
    iconUrl: 'img/lighthouse_32px.png',

});

var policeIcon = L.icon({
    iconUrl: 'img/police_32px.png',

});

var boatIcon = L.icon({
    iconUrl: 'img/Canoeing_32.png',
});

var hospitalIcon = L.icon({
  iconUrl: 'img/Hospital_32.png',
});

var genericIcon = L.icon({
  iconUrl: 'img/gener_32.png',
});


//L.marker(new L.LatLng(44.882, -65.161), {icon: divIcon }).addTo(map);

// Locations of external GeoJSON files for map layers
var trail_url = 'json/hmt.json';
var poi_url = "json/poi.json";
var trailh_url = "json/trailh.json";
var town_url = "json/town_pt.json";

// Geographic features
var trailseg = new L.GeoJSON.AJAX(trail_url,
              {onEachFeature: onEachFeatureTrail,
              style: usercountStyle
            });

// Trailheads use an icon defined in the css
var trailh = new L.GeoJSON.AJAX(trailh_url, {
  pointToLayer: function(feature, latlng) {
    return L.marker(latlng, {icon: trailHeadIcon});
  }
});

// For each town feature, return a divIcon which is just an HTML text label
var town = new L.GeoJSON.AJAX(town_url,
              {onEachFeature: function(feature, layer) {

                var divIcon = L.divIcon({
                  // replace whitespace with a linebreak for stacked labels
                  html: '<center>' + feature.properties.NAME.split(" ").join("<br/>") + '</center>',
                  className: "labelClass"
                })
                layer.setIcon(divIcon);
              }

            });

town.addTo(map);

// Load custom icon, code from https://stackoverflow.com/questions/31601442/add-custom-icon-to-leaflet-ajax-data
var poi = new L.GeoJSON.AJAX(poi_url,{
                      middleware:function(data){
                         return L.geoJson(data, {
                            onEachFeature: function (feature, layer) {

                              if (feature.properties.type == 'lighthouse') iconToUse = lightIcon;
                              else if (feature.properties.type == 'police') iconToUse = policeIcon;
                              else if (feature.properties.type == 'beach') iconToUse = boatIcon;
                              else if (feature.properties.type == 'hospital') iconToUse = hospitalIcon;
                              else iconToUse = genericIcon;
                              layer.setIcon(iconToUse);

                              layer.bindPopup(feature.properties.name);
                            }
                          }).addTo(markers); // why does this need to be
                      }                     // declared here? Using poi.addTo(markers)
                   });                      // later in the script doesn't work


// Add features to map
basemap.addTo(map);
markers.addTo(map);
trailseg.addTo(map);
trailh.addTo(map);

// Add scalebar and zoom to map
L.control.scale({imperial: false}).addTo(map);
L.control.zoom({position: 'bottomleft'}).addTo(map);

// Create a dictionary of items to be displayed in the legend (right slide menu)
var poiList = {'Lighthouse': lightIcon, 'Police': policeIcon,
               'Boat Launch': boatIcon, 'Hospital': hospitalIcon,
               'Point of Interest': genericIcon}


// Contents of right slide menu
var contents = [`<br/> <div class="circle" style="width: 12px; height: 12px;
                display: inline-block;"></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp; Trail Head <br/><br/>`]

// For each entry in the poiList dictionary, create a legend item
for (var key in poiList) {
    // check if the property/key is defined in the object itself, not in parent
    if (poiList.hasOwnProperty(key)) {
        contents += '<img src="' + poiList[key].options.iconUrl + '"/>&nbsp;&nbsp;&nbsp;&nbsp;' + key + '<br/><br/>';
    }
}

// Create right slide menu
var slideMenu = L.control.slideMenu('', {position: 'bottomright', menuposition: 'topright', width: '20%', height: '400px', delay: '50', icon: 'fa-chevron-left'}).addTo(map);
 slideMenu.setContents(contents);

// This adds the custom scrollbar to the 'leaflet-menu' class (slide menu)
// var el = document.querySelector('.modal-content');
// SimpleScrollbar.initEl(el);




// testing below
// var marker = L.marker([51.509, -0.08], {icon: div_circle} ).addTo(map);

// var hfx_url = "https://opendata.arcgis.com/datasets/f6921c5b12e64d17b5cd173cafb23677_0.geojson"
// var hfx = new L.GeoJSON.AJAX(hfx_url).addTo(map);
// console.log(hfx)
//
// L.marker([-64, 45]).addTo(map);

// var geojsonFeature = {
//     "type": "Feature",
//     "properties": {
//         "name": "Coors Field",
//         "amenity": "Baseball Stadium",
//         "popupContent": "This is where the Rockies play!"
//     },
//     "geometry": {
//         "type": "Point",
//         "coordinates": [-104.99404, 39.75621]
//     }
// };
//
// L.geoJSON(geojsonFeature).addTo(map);
