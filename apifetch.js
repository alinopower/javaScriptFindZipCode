document.querySelector('#cp').addEventListener('input', function () {
    if (this.value.length == 5) {
        var url = `https://geo.api.gouv.fr/communes?codePostal=${this.value}`;
        fetch(url)
            .then(response =>
                response.json()
            .then(data => {
                var ulOpen = '<ul>';
                for (var comun of data) {
                 ulOpen = ulOpen + `<li><strong>${comun.nom}</strong> - ${comun.population} habitants</li>`
                }
                ulOpen = ulOpen + '</ul>'
                document.querySelector('#listeComune').innerHTML = ulOpen;
                })).catch(err => {
                        console.log('ERREUR: '+ err)
                })
    }
});