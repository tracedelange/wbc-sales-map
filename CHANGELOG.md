# Changelog
All notable changes to this project will be documented in this file.
This project is under development by Trace DeLange, any questions can be directed to tracedelange@me.com

## [Unreleased / In Development]
- Code to be cleaned up and polished for full production quality
- If Locher vendor premise type can be acquired, filtering by premise type will be possible.
- Automatic data processing of new YTD sales reports.
- Info-box styling changes suggested should be implemented as well as un-abbreviated product names
- Incorporate self-distribution data
- Edit entries to only show month to date

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



## [v0.2] - 2021-07-21

### Added
- GoDaddy Domain Name subroute added. Site can now be visited at find.waconiabrewing.com
- Loading icon added to occupy screen during back-end fetching
- If info window is open and filter is clicked, info window will close

### Changed
- Backend hosting upgraded to 'Hobby' level Dyno on heroku. Several features enabled as well as much more responsive load time on webapp.
- CSS media query rules
- Favicon copied from main website
- Minor styling changes on info windows
- Corrected map options that point to the google map style defined online
### Removed
- Removed unused components (Checkboxes, Customcheckboxes)
- Removed /private as all keys are now stored in local, gitIgnored .env
- Removed unused assets

### Fixed
- Fixed bug where header disappears on info window exit


## [v0.3] - 2021-07-22

### Added
- Logo is a link to the website
- Added Material-UI component css rules, filter menu now follows fonts for the rest of the site. Also conditionally resizes using mediaQuery hook.

### Changes
- Edited a bunch of css rules and got the map to fully occupy viewport on desktop and mobile. Styling nearly complete, just need to discuss new high res pins.
- Changed firebase imports to get rid of development errors
- Cleaned up code and removed unused functions, console logs, imports, etc.


## [v0.3.1] - 2021-07-29

### Added
- Function created to import new JJ Taylor and Locher reports

### Changes 
- Added conditional display for info windows, if display name exists display it, if it does not yet exist, display the report customer name 
- Added month to date order rendering.


