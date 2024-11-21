const map = L.map('map').setView([-41.2865, 174.7762], 6); // Focus on New Zealand

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Form submission logic
const form = document.getElementById('property-form');
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const requestor = document.getElementById('requestor').value;
    const propertyAddress = document.getElementById('property-address').value;

    // Simulate flood zone check by adding the address to the map
    const response = await axios.post('/check-flood-zone', {
        requestor,
        propertyAddress
    });

    if (response.data.floodHazard) {
        alert('This property is in a flood hazard zone.');
    } else {
        alert('This property is not in a flood hazard zone.');
    }
});
