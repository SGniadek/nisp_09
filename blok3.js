// --- Logika dla BLOKU 3: Line-up --- //

// Tablica z danymi artystów (dane tymczasowe)
const artistsLineup = [
    {
        name: "Baciary",
        time: "17:00",
        genre: "Disco Polo",
        image: "https://via.placeholder.com/400x250/333333/ffffff?text=Zespol+1", 
        alt: "Zdjęcie Zespołu 1"
    },
    {
        name: "Grubson",
        time: "20:00",
        genre: "Hip-Hop",
        image: "https://via.placeholder.com/400x250/333333/ffffff?text=Zespol+2",
        alt: "Zdjęcie Zespołu 2"
    },
    {
        name: "Jakas Baba",
        time: "22:00",
        genre: "Muzyka Elektroniczna / Pop",
        image: "https://via.placeholder.com/400x250/333333/ffffff?text=Gwiazda+Wieczoru",
        alt: "Zdjęcie Gwiazdy Wieczoru"
    }
];

// Funkcja renderująca karty artystów
function renderLineup() {
    const container = document.getElementById('artists-container');
    
    // Zabezpieczenie na wypadek, gdyby kontenera nie było na stronie
    if (!container) return; 

    container.innerHTML = ''; // Czyszczenie kontenera

    artistsLineup.forEach(artist => {
        // Tworzenie głównego elementu karty
        const card = document.createElement('div');
        card.className = 'artist-card';

        // Struktura wewnętrzna karty
        card.innerHTML = `
            <img src="${artist.image}" alt="${artist.alt}" class="artist-img" loading="lazy">
            <div class="artist-info">
                <span class="artist-time">${artist.time}</span>
                <h3 class="artist-name">${artist.name}</h3>
                <p class="artist-genre">${artist.genre}</p>
            </div>
        `;

        // Dodanie karty do kontenera
        container.appendChild(card);
    });
}

// Uruchomienie funkcji po załadowaniu struktury DOM
document.addEventListener('DOMContentLoaded', renderLineup);