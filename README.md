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
* No test have been implemented yet
* Use react-native-htmlview to render raw html for event text and title

## Next steps
* Use rn-placeholder to give a better placeholder for the entire EventCard.
