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
var legendTitle = document.getElementById("legend-title")
var legendBody = document.getElementById("legend-body")

// Variables to hold text descriptions
legendTitleText = "Harvest Moon Trailway"
legendBodyText = "Kings & Annapolis Counties <br/> The Annapolis Valley<br/>Nova Scotia, Canada"
aboutText = `
<br/>
This website was created to demonstrate the use of <b>JavaScript</b>, the
<b>Leaflet web mapping library</b>, HTML5, and CSS to produce functional,
 dynamic mapping applications for the Web.
<br/><br/>
This map displays a working prototype of a tourism-oriented map of the
Harvest Moon Trailway in the Annapolis Valley, Nova Scotia, and includes
spatial and attribute data related to various features of interest.
<br/><br/>
Information about individual trail segments can be seen by clicking on a map
feature. This triggers a Leaflet pop-up containing calculated attribute data.
<br/><br/>
Points of interest have been symbolized with icons obtained from the client. A
JavaScript function was written allowing for the various types of POI to be
symbolized differently.
<br/><br/>
The <b>Leaflet Cluster</b> plugin was used to condense these at smaller scale ranges,
preventing the map view from becoming cluttered.
<br/><br/>
The <b>MiniMap Leaflet plugin</b> was used to provide the small locator map in the
lower right of the map view, allowing vistors to the area to see locations
in context.
<br/><br/>
<b>Bootstrap</b> was used to create a simple, responsive website layout, and
<b>Mapbox Studio</b> was used to create custom basemap tiles consistent with
the client's brand design.

`

photoText = `


  <div class="album py-5 bg-light">
    <div class="container">

      <div class="row">
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Photo" src="img/Photos/1.png"><title>Photo</title><rect fill="#55595c" width="100%" height="100%"/><text fill="#eceeef" dy=".3em" x="50%" y="50%">Thumbnail</text></svg>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>

                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail" src="img/Photos/2.jpg"><title>Placeholder</title><rect fill="#55595c" width="100%" height="100%"/><text fill="#eceeef" dy=".3em" x="50%" y="50%">Thumbnail</text></svg>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail" src="img/Photos/3.jpg"><title>Placeholder</title><rect fill="#55595c" width="100%" height="100%"/><text fill="#eceeef" dy=".3em" x="50%" y="50%">Thumbnail</text></svg>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail" src="img/Photos/4.JPG"><title>Placeholder</title><rect fill="#55595c" width="100%" height="100%"/><text fill="#eceeef" dy=".3em" x="50%" y="50%">Thumbnail</text></svg>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  </div>

`

// Initialize the body text of the website to display the intro paragraph
// and the legend box to display the trail name
// bodyText.innerHTML = introText
legendTitle.innerHTML = legendTitleText
legendBody.innerHTML = legendBodyText




// Get the modal
var modal = document.getElementById('myModal');
var modalContent = document.getElementById('modal-content');


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
aboutButton.onclick = function() {
  modal.style.display = "block";
  modalContent.innerHTML = aboutText;
}

// When the user clicks the button, open the modal
photoButton.onclick = function() {
  modal.style.display = "block";
  modalContent.innerHTML = photoText;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
