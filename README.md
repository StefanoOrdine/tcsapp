# tcsapp
This is a ReactNative application to list the Torino Coding Society events.

# Project Status
At the moment the app visualizes the list of events in the main View.

## Libraries and current implementation
* Started with a plain new react native app.
* Included NativeBase UI Framework.
* Included and linked react-native-vector-icons.
* The list of card are loaded used the wordpress api and axios as js client.
* The EventCard loads ase64 encoded  placeholder before loading the actual event image from api.
* No test have been implemented yet.
* Use react-native-htmlview to render raw html for event text and title (instead of using a plain WebView).
* Add lodash to truncate the event text.
* Use rn-placeholder to give a better placeholder for the entire EventCard:
  * I'm using a custom placeholder to represent the cards being loaded by the api call that retrieves the events
  * and an Image place holder into the EventCard component for the Image component.
  * In this way I have a first good looking list of _placeholdered_ cards when the events are still coming from api
  * then the titles and description is rendered on each card still with the image placeholder
  * and finally the images arrives from a second api call for each card and will be switched with the placeholder images
  * the result is a good looking composition of data in the card as far as data arrives from api calls.
* Add eslint.
* React Navigation as a routing library.

## Next steps
* Sketch a new layout to display other sections like Hoem, Events, Speakers, Partners, etc.
* Implement the single Event Page.
* Implement the Speaker Section.
* take a look at https://github.com/mathiasbynens/he to decode the html from api.
