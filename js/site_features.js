//♥*♡∞:｡.｡｡･ﾟﾟ･.・゜゜・✧･ﾟ: *✧･ﾟ:* *:･ﾟ✧*:･ﾟ✧・゜゜・．･ﾟﾟ･｡｡.｡:∞♡*♥
//
// Name: main.js
// By: Nicole White January 2019
// Purpose: Javascript providing non-webmap website functionality
//
//♥*♡∞:｡.｡｡･ﾟﾟ･.・゜゜・✧･ﾟ: *✧･ﾟ:* *:･ﾟ✧*:･ﾟ✧・゜゜・．･ﾟﾟ･｡｡.｡:∞♡*♥

// Variables to hold DOM elements that do stuff
var bodyText = document.getElementById("body-text")
var aboutButton = document.getElementById("about-button")
var legendTitle = document.getElementById("legend-title")
var legendBody = document.getElementById("legend-body")

// Variables to hold text descriptions
legendTitleText = "Harvest Moon Trailway"
legendBodyText = "Annapolis Valley, N.S."
aboutText =
`
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
Mapbox Studio was used to create custom basemap tiles.
`
introText = "<br/>Come explore the Harvest Moon Trail! :D"

// Initialize the body text of the website to display the intro paragraph
// and the legend box to display the trail name
bodyText.innerHTML = introText
legendTitle.innerHTML = legendTitleText
legendBody.innerHTML = legendBodyText

// When the About menu item is clicked, display the About HTML
aboutButton.onclick = function() {
  bodyText.innerHTML = aboutText
}
