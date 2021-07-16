# Changelog
All notable changes to this project will be documented in this file.
This project is under development by Trace DeLange, any questions can be directed to tracedelange@me.com

## [Unreleased / In Development]
- Favicon needs to be changed from the default react-app
- Add a loading icon to be displayed while backend data is being fetched
- Code to be cleaned up and polished for full production quality
- Additional styling rules to increase responsivity on mobile browsers.
- If Locher vendor premise type can be acquired, filtering by premise type will be possible.
- Automatic data processing of new YTD sales reports.
- Desired Heroku hosting strength to be discussed.
- Domain name to be discussed.

## [v0.1] - 2021-07-16
### Added
- Added a changelog to keep track of development.
- Changed the ReadMe from default create-react-app text.
- Pushed working prototype version to Heroku. The site is now live but should not yet be shared with the public.
- Managed to tie in sales data from Locher bros. distributing to firebase backend, front end is now displaying data from both distributers.
- Added a filter feature to display only vendors that carry the selected item. Only supports one item filtering but could likely support multiple filters if desired.
- Added a marker to display the coordinates of WBC home base.
- Added media queries to CSS to resize header features for mobile browsers.
- Added a function to remove Info Windows when the mouse leaves the Map component to increase cleanliness. Might be unhelpful for double monitors or for paging over to other windows. Can easily be removed if needed.

### Changed
- Changed display names from distributer format to plain legible English. 
- Edited some of the Google Map component options to change how scrolling is handled on mobile browsers. Currently set to 'greedy' to disable two fingers scrolling on mobile.

### Removed
- When a marker is now clicked, only the most recent order of any given product appears instead of each order in the past.
- Removed extra map control buttons from map (Street View, satellite view, etc.)
- Removed Filter by off sale vs on sale option due to lack of information from Locher distributer.

### Security
- Moved all api keys out of the application onto a local .env file which is automatically imported as environmental variables by react
- Added api keys to Heroku private vars for security.
- Firebase backend security rules changed to read only
