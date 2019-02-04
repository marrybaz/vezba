let baza = document.getElementById("baza");
fetch('https://randomuser.me/api/?results=20')
    .then(function (response) {
        return response.json();
    })

    .then(function (podaci) {
        for (let i = 0; i < podaci.results.length; i++) {
            const user = podaci.results[i];
            const imgSrc = user.picture.large;
            baza.innerHTML += `
     <div class="korisnik" itemscope itemtype="http://schema.org/Person">
        <h2><span itemprop="name">${user.name.first.charAt(0).toUpperCase() + user.name.first.slice(1).toLowerCase()}</span></h2>
        <p><span itemprop="gender">${user.gender.charAt(0).toUpperCase() + user.gender.slice(1).toLowerCase()}</span></p>
        <p><span itemprop="email">${user.email}</span></p>        
        <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
            <p><span itemprop="addressLocality">${user.location.city}</span></p>
        </div>
        <img itemprop="image" src="${imgSrc}">
        <p>&#x260E;<a itemprop="telephone" href="tel:${user.phone}">${user.phone}</a></p>
    </div>`

        }
    })






