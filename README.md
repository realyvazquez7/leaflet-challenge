# leaflet-challenge

# Leaflet Challenge

## Project Overview
The United States Geological Survey (USGS) is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. This project aims to visualize USGS earthquake data to help better educate the public and government organizations about the issues facing our planet.

## Table of Contents
- [Project Overview](#project-overview)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [License](#license)


## Usage
The application visualizes earthquake data from the past week, fetched from the USGS GeoJSON feed. Each earthquake is represented by a marker on the map, with size and color corresponding to the earthquake's magnitude and depth, respectively. Clicking on a marker will display additional information about the earthquake.

## Features
- Interactive map displaying earthquake data
- Markers sized by earthquake magnitude
- Markers colored by earthquake depth
- Popups with additional earthquake information
- Legend explaining marker colors

## Brief Explanation of What We Did
1. **Initialized the Project**:
   - Created a new repository and set up the project structure with necessary files (`index.html`, `style.css`, `logic.js`).

2. **Set Up the Basic Map**:
   - Used Leaflet.js to initialize a map centered at San Francisco.
   - Added OpenStreetMap tile layer for the map.

3. **Fetched and Visualized Earthquake Data**:
   - Fetched earthquake data from the USGS GeoJSON feed using D3.js.
   - Plotted each earthquake as a circle marker on the map with size based on magnitude and color based on depth.
   - Added popups to display additional information for each earthquake.

4. **Added a Legend**:
   - Created a legend to provide context for the marker colors representing different earthquake depths.

## Technologies Used
- [Leaflet](https://leafletjs.com/)
- [D3.js](https://d3js.org/)
- HTML, CSS, JavaScript

## Instructions
PART 1: Create the Earthquake Visualization
1. **Visit the USGS GeoJSON Feed**: 
   - URL: [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)
   - Use the URL of the JSON data to pull in the data for visualization.

2. **Import and Visualize the Data**:
   - Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.
   - Data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.
   - Include popups that provide additional information about the earthquake when its associated marker is clicked.
   - Create a legend that will provide context for your map data.


## License
This project is licensed under the MIT License.

