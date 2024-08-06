var map = L.map('map').setView([54.6, -2.9], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//Creating the custom marker styles for the point of intrest markers

var TQSicon = L.icon({
    iconUrl: 'TQS_pin.png',

    iconSize:     [100, 100],   // size of the icon
    iconAnchor:   [50, 100],    // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -100]     // point from which the popup should open relative to the iconAnchor
});

var Townicon = L.icon({
    iconUrl: 'Town_pin.png',

    iconSize:     [100, 100], // size of the icon
    iconAnchor:   [50, 100], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -100] // point from which the popup should open relative to the iconAnchor
});

var Mountainicon = L.icon({
    iconUrl: 'Mountain_pin.png',

    iconSize:     [100, 100], // size of the icon
    iconAnchor:   [50, 100], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -100] // point from which the popup should open relative to the iconAnchor
});

// The array that describes the markers locations

var markers = [
    {name: "", lat: 54.604732, lng: -2.882828, desc: "The Quiet Site campsite, possibly the best campsite around", img: "./TQS_logo.png", icon: TQSicon},
    {name: "Pooley Bridge", lat: 54.6126, lng: -2.8202, desc: "A small town located at one end of Ullswater", img: "./Pooley.jpg", icon: Townicon},
    {name: "Great Mell Fell", lat: 54.6199, lng: -2.9356, desc: "Quick walk up the fell", img: "./Pooley.jpg", icon: Mountainicon}
]

// Function to update the map with markers

function updateMarkedLocations() {
    markers.forEach(function(marker) {
        L.marker([marker.lat, marker.lng], {icon: marker.icon }).addTo(map)
            .bindPopup(`
            <div style="text-align: center;">
            <strong>${marker.name}</strong> 
            <br>
            <img src="${marker.img}" alt="${marker.name}" style="width: 100%; height: auto; max-width: 100px;"/>
            <br>
            ${marker.desc}
            </div>
            `);
    });
}

// Call the function to make the system work

updateMarkedLocations();