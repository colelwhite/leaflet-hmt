//♥*♡∞:｡.｡｡･ﾟﾟ･.・゜゜・✧･ﾟ: *✧･ﾟ:* *:･ﾟ✧*:･ﾟ✧・゜゜・．･ﾟﾟ･｡｡.｡:∞♡*♥
//
// Name: main.js
// By: Nicole White January 2019
// Purpose: Javascript providing non-webmap website functionality
//
//♥*♡∞:｡.｡｡･ﾟﾟ･.・゜゜・✧･ﾟ: *✧･ﾟ:* *:･ﾟ✧*:･ﾟ✧・゜゜・．･ﾟﾟ･｡｡.｡:∞♡*♥

// Variables to hold DOM elements that do stuff
// var bodyText = document.getElementById("body-text")
var aboutButton = document.getElementById("about-button")
var mapButton = document.getElementById("map-button")
var photoButton = document.getElementById("photo-button")
var exploreButton = document.getElementById("explore-button")
var legendTitle = document.getElementById("legend-title")
var legendBody = document.getElementById("legend-body")

// Variables to hold text descriptions
legendTitleText = "Harvest Moon Trailway"
legendBodyText = "Kings & Annapolis Counties <br/> The Annapolis Valley<br/>Nova Scotia, Canada"
aboutText = `
<h5>About</h5>
This website was created by Nicole White in January 2019 as course work for the
Geographic Sciences Diploma at
the Centre of Geographic Sciences to demonstrate the use of <b>JavaScript</b>, the
<b>Leaflet web mapping library</b>, HTML5, and CSS to produce functional,
 dynamic mapping applications for the Web.
<br/><br/>
This map displays a working prototype of a tourism-oriented map of the
Harvest Moon Trailway in the Annapolis Valley, Nova Scotia, and includes
spatial and attribute data related to various features of interest.
<br/><br/>
Information about individual trail segments can be seen by clicking on a map
feature, which populates the left slide menu with calculated attribute data
such as segment length and trail user statistics.
<br/><br/>
Points of interest have been symbolized with icons obtained from the client. A
JavaScript function was written allowing for the various types of POI to be
symbolized dynamically when the page loads.
<br/><br/>
Although Leaflet is a powerful web mapping library on its own, several third-
party plugins were used to extent its functionality:
<br/><br/>
• The <b><a href="https://github.com/Leaflet/Leaflet.markercluster">Leaflet
Markercluster</a></b>
plugin was used to condense POI icons at smaller scale ranges,
preventing the map view from becoming cluttered.
<br/><br/>
• <b><a href="https://github.com/Norkart/Leaflet-MiniMap">MiniMap
</a></b> was used to provide the small locator map in the
lower right of the map view, allowing vistors to the area to see locations
in context.
<br/><br/>
• The <b><a href="https://github.com/unbam/Leaflet.SlideMenu">Slide Menu</a></b>
 plugin was used to create the slide menus functioning as
legends and information boxes that can be toggled on or off.
<br/><br/>
<b><a href="https://getbootstrap.com">Bootstrap</a></b> was used to create a
simple, responsive front-end layout, and
<b><a href="https://www.mapbox.com/mapbox-studio/">Mapbox Studio</a></b> was
used to create custom basemap tiles consistent with
the client's brand design.<br/>
<br/><br/>
<center>
<img src="img/cogcoloured.png" width=200 /><img src="img/logo_sm.png" width=150 />
</center>
`
// Bootstrap Album for photo section
photoText = `
<h5>Photos</h5>
      <div class="row">
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Photo" src="img/Photos/1.png"><title>Photo</title><rect fill="#55595c" width="100%" height="100%"/></svg>
            <div class="card-body">
              <p class="card-text">A beautiful photo of the Harvest Moon Trailway</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail" src="img/Photos/2.jpg"><title>Placeholder</title><rect fill="#55595c" width="100%" height="100%"/></svg>
            <div class="card-body">
              <p class="card-text">A beautiful photo of the Harvest Moon Trailway</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail" src="img/Photos/3.jpg"><title>Placeholder</title><rect fill="#55595c" width="100%" height="100%"/></svg>
            <div class="card-body">
              <p class="card-text">A beautiful photo of the Harvest Moon Trailway</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail" src="img/Photos/4.JPG"><title>Placeholder</title><rect fill="#55595c" width="100%" height="100%"/></svg>
            <div class="card-body">
              <p class="card-text">A beautiful photo of the Harvest Moon Trailway</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>
        Photos by Monica Lloyd
      </div>
`
exploreText =
`<h5>Explore</h5>
This section could contain links to parks, museums, and other places
of interest`

// Get the modal
var modal = document.getElementById('myModal');
var modalContent = document.getElementById('moda-content');


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
aboutButton.onclick = function() {
  modal.style.display = "block";
  modalContent.innerHTML = aboutText;
  map.dragging.disable();
  map.touchZoom.disable();
  map.doubleClickZoom.disable();
  map.scrollWheelZoom.disable();
}

// When the user clicks the button, open the modal
photoButton.onclick = function() {
  modal.style.display = "block";
  modalContent.innerHTML = photoText;
  map.dragging.disable(); // Disable map panning when the modal is up
  map.touchZoom.disable();
  map.doubleClickZoom.disable();
  map.scrollWheelZoom.disable();
}

// When the user clicks the button, open the modal
exploreButton.onclick = function() {
  modal.style.display = "block";
  modalContent.innerHTML = exploreText;
  map.dragging.disable(); // Disable map panning when the modal is up
  map.touchZoom.disable();
  map.doubleClickZoom.disable();
  map.scrollWheelZoom.disable();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  map.dragging.enable(); // Re-enable map panning when the modal goes away
  map.touchZoom.enable();
  map.doubleClickZoom.enable();
  map.scrollWheelZoom.enable();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    map.dragging.enable(); // Re-enable map panning when the modal goes away
    map.touchZoom.enable();
    map.doubleClickZoom.enable();
    map.scrollWheelZoom.enable();
  }
}
