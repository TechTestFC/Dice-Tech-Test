# Dice Tech Test

## Prerequisites
- node / npm to build and run the project
- [Expo](https://expo.io/) to run the project on mobile. I was not keen on using a library that needs installing a 3rd party app on a phone at first, but this is a recommended way of starting according to the [React Native documentation](https://facebook.github.io/react-native/docs/getting-started).

## Usage
1. Run `npm install` and `npm start`
2. A web browser window should appear, scan the QR code to automatically display the app.

## Architecture
- containers: React components connected to Redux
- components: Purely presentational components
- stores: Redux stores


## Decisions
- I decided to go with Redux as I'm pretty comfortable setting it up.
- I did not want to go the Redux-Saga / Redux-Thunk way as I wanted to show usage of debounce / async / await in the React components. 
- My implementation of star / unstar straight in the redux store means they will disappear every time you will update your search. I could not find an endpoint to actually set a movie as favourite. Arguable, it could have been done as a separate array (movies / starredMovies) in redux and combined in mapStateToProps to preserve the favourite / not favourite status, but I saw little value in doing that. It would obviously be way more important in a real life app.
- I added the API KEY in clear in ap/constants. I obviously would not do that in a prod environments.
- I did not add unit tests as I wanted to timebox it to 5 hours as stated on the tech test document. Tried to add jest but ran into a babel error.