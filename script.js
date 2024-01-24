let map = L.map('map').setView([41.6086, 21.7453],8.4);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


//MAKING A POP-UP HERE
 let markerPrilep = L.marker([41.3441, 21.5528]);
 markerPrilep.addTo(map);

let markerBitola = L.marker([41.0297, 21.3292]);
markerBitola.addTo(map);

let markerOhrid = L.marker([41.1231, 20.8016]);
markerOhrid.addTo(map);

let markerKavadarci = L.marker([41.4329,  22.0089]);
markerKavadarci.addTo(map);

let markerNegotino = L.marker([41.4829,  22.0923]);
markerNegotino.addTo(map);

let markerStruga = L.marker([41.1778,  20.6783]);
markerStruga.addTo(map);

let markerSkopje = L.marker([41.9981,  21.4254]);
markerSkopje.addTo(map);

let markerStip = L.marker([41.7464,  22.1997]);
markerStip.addTo(map);

let markerKochani = L.marker([41.9168,  22.4083]);
markerKochani.addTo(map);

let markerKrushevo = L.marker([41.3706,  21.2502]);
markerKrushevo.addTo(map);

let markerGevgelija = L.marker([41.1452,  22.4997]);
markerGevgelija.addTo(map);

let markerVeles = L.marker([41.7797,  21.7376]);
markerVeles.addTo(map);

let markerStrumica = L.marker([41.4378,  22.6427]);
markerStrumica.addTo(map);





