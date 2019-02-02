//♥*♡∞:｡.｡｡･ﾟﾟ･.・゜゜・✧･ﾟ: *✧･ﾟ:* *:･ﾟ✧*:･ﾟ✧・゜゜・．･ﾟﾟ･｡｡.｡:∞♡*♥
//
// Name: main.js
// By: Nicole White January 2019
// Purpose: Javascript for Harvest Moon Trailway Leaflet web map.
//
//♥*♡∞:｡.｡｡･ﾟﾟ･.・゜゜・✧･ﾟ: *✧･ﾟ:* *:･ﾟ✧*:･ﾟ✧・゜゜・．･ﾟﾟ･｡｡.｡:∞♡*♥


// Define functions
// Function: onEachFeature function for trail segment pop-ups
function onEachFeatureTrail(feature, layer) {

    layer.on({
      click: function(e) {
        lContent = '<b><h5>' + feature.properties.name
                   + '</h5></b>'
        lContent += '<i>' + feature.properties.desc + '</i><br/><br/>'
        lContent += '<b>Segment Length:</b> ' + feature.properties.length
                     + ' metres' + '<br/>'
        lContent += '<b>Managing Entity:</b> ' + feature.properties.manager
                    + '<br/>'
        lContent += '<b>Uses:</b> ' + feature.properties.usage + '<br/>'
        lContent += '<b>Average Daily Users:</b> '
                     + feature.properties.avedaily + '<br/>'
        lContent += '<b>Peak Daily Use:</b> ' + feature.properties.peakdaily
                     + '<br/>'
        lContent += '<b>Pedestrian Traffic:</b> '
                    + feature.properties.pedpercent + '%' + '<br/>'
        lContent += '<b>Cyclist Traffic:</b> ' + feature.properties.cycpercent
                     + '%' + '<br/>'
        lContent += '<b>Monthly Users:</b> ' + feature.properties.monthlyuse
                     + '<br/>'
        lContent += '<b>Adjusted Annual User Count:</b> '
                    + feature.properties.adjustedan + '<br/>'
        lSlideMenu.setContents(lContent)

      }

    })

}


function townStyle(feature) {
  var labelToUse;

  return {
    "color": "#0d8141",
    "icon": divIcon,

  };
}
lContents = `<b><h5>The Harvest Moon Trailway</h5></b><br/>
Annapolis and Kings Counties<br/>
The Annapolis Valley<br/>Nova Scotia, Canada<br/><br/>
<b>Trail Length:</b> 112 kilometres<br/>
<b>Uses: </b>Walking, Cycling, Skiing, Horseback Riding, ATV

`

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
              style: {
                "color": "#0d8141",
                "weight": 2.5,

              }
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


// Contents of right slide menu. Trail Head (L.divIcon) is added by default, then
// everything from the poiList dictionary (L.icons) is added
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

 var lSlideMenu = L.control.slideMenu('', {position: 'bottomleft', menuposition: 'topleft', width: '20%', height: '400px', delay: '50', icon: 'fa-chevron-right'}).addTo(map);
  lSlideMenu.setContents(lContents);
