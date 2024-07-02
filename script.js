document.addEventListener('DOMContentLoaded', function () {
    const countriesGrid = document.getElementById('countries-grid');

    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            data.forEach(country => {
                const countryElement = document.createElement('div');
                countryElement.classList.add('country');

                const flagElement = document.createElement('img');
                flagElement.src = country.flags.png;
                flagElement.alt = `${country.name.common} flag`;
                countryElement.appendChild(flagElement);

                const nameElement = document.createElement('div');
                nameElement.classList.add('country-name');
                nameElement.textContent = country.name.common;
                countryElement.appendChild(nameElement);

                const googleMapElement = document.createElement('div');
                googleMapElement.classList.add('google-map');
                const googleMapLink = `https://www.google.com/maps/place/${encodeURIComponent(country.name.common)}`;
                googleMapElement.innerHTML = `<a href="${googleMapLink}" target="_blank">Google Maps</a>`;
                countryElement.appendChild(googleMapElement);

                countriesGrid.appendChild(countryElement);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
