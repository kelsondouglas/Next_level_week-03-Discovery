//Cria Mapa
const map = L.map('mapid').setView([-20.8109436,-49.3837364], 15);

//Cria e adiciona TileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Create icon
const icon = L.icon({
    iconUrl: './public/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//Create popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"></img> </a> ')

// Adiciona um marcador ao mapa
L.marker([-20.8109436,-49.3837364], { icon }).addTo(map)
    .bindPopup(popup)