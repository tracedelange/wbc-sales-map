# Changelog
All notable changes to this project will be documented in this file.
This project is under development by Trace DeLange, any questions can be directed to tracedelange@me.com

## [Unreleased / In Development]
- Automatic data processing of new YTD sales reports.
- Info-box styling changes suggested should be implemented as well as un-abbreviated product names
- Refactor filter as routes that can be accessed directly from link (QR Codes linking directly where to find a product)


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

## [v0.3.2] - 2021-08-02

## Added
- Copyright claim and footer added for mobile and web versions

## Changes
- Edits to pin model, could not get pin resizing to work and more pressing things to take care of


## [v1.0] - 2021-08-03

### Notes
- I think we're ready to go public with this one. 

### Added
- Self distribution data has been added to the backend and is now being presented on the front.
- If a browser attempts to visit with an http request, the app will automatically re-route to https for a secure connection
- Added rules to clean up product names and create a more uniform reading experince across distributers.
- Added several database management functions (Not yet comitted)

### Changed
- Aligned the spinner logo for better viewing on mobile

## [v1.1] - 2021-08-05

### Added
- Locher Bros distributer data now present in backend.
- Premise type filter added to map.
- Blue pin was added to signify on site product availibility.

### Changed
- Product filter now shows which product is being searched for, keep eyes out for styling bugs especially on mobile.

[v1.2] - 2021-08-09

### Added
- Added link to email salesmap account in footer should there be an issue
- Added Final Circle Shandy to filter list

### Fixed
- Fixed a bug where two back end requests for two different months were overwriting each other and failing to display accurate data.

## [v1.2] - 2021-08-30

### Changed
- Refactored back end call structure. Date ranges can now be edited much more easily and year end calendar changes should go smoothly.
- Reversed order of Infowindow products rendering to put most recent products at the top of the list.

## [1.2.1] - 2021-09-02 

### Fixed
- On the turn of the month there was no data to retrieve from the backend for the month of september. On first backend fetch the fetch function would return undefined and the loop would break because there was no data to work with. Additionally, the number of fetches incremented to the back end was only 2, because the first didn't return anything. This has been fixed by ensuring that even when a database snapshot is empty, the fetch callback function is still executed. In this context, the lack of that execution resulted in a permanent loading page. Additionally, there has been a null check included in the backend processing to add two layers of redundancy against a bug like this in the future.

## [2.0] - TESTING - 1/4/2022

### Added
 - MUI v5
 - Redux store to manage global state, including active filters, display data and user location.
 - Added support for user location services 

### Changed
 - Updated styling library to Material UI version 5
 - Integrated custom MUI theme to apply custom font size across application
 - Refactored map components to better implement separation of concerns
 - Changed data storage to organization rails API containing sales information
 - Updated styling rules for mobile to better handle mobile interactions

### Removed
 - Removed Firebase as primary backend storage service
 - Removed previous fetch requests and configuration variables
 - Removed outdated dependencies