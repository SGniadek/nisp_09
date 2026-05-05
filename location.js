// --- Logika dla BLOKU 5: Lokalizacja --- //

function initMap() {
    // Koordynaty Akademii Tarnowskiej: 50.015, 20.985
    const atTarnow = [50.0152, 20.9855];

    // 1. Inicjalizacja mapy
    const map = L.map('map').setView(atTarnow, 16);

    // 2. Dodanie warstwy mapy (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // 3. Dodanie markera
    const marker = L.marker(atTarnow).addTo(map);
    
    // 4. Popup po kliknięciu w marker
    marker.bindPopup("<b>Juwenalia 2026</b><br>Akademia Tarnowska<br>ul. Mickiewicza 8").openPopup();
}

// Uruchamiamy, gdy DOM będzie gotowy
document.addEventListener('DOMContentLoaded', initMap);