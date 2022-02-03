function leagueCode() {
    fetch(`${baseURL}/v2/competitions/`, { headers })

        .then(response => response.json().then(data => {
            let searchLeague = document.getElementById("search").value
            let code;
            for (let i = 0; i < data["competitions"]["length"]; i++) {
                if (searchLeague == data["competitions"][i]["name"]) {
                    code = data["competitions"][i]["code"]
                }
            }
            leaguesScadule(code)
        }))
}

function leaguesScadule(l_code) {
    fetch(`${baseURL}/v2/competitions/${l_code}/matches`, { headers })
        .then(response => response.json().then(data => {
            this.endMatches = function () {
                let matches = "";
                for (let i = 0; i < data["matches"]["length"]; i++) {
                    if (data["matches"][i]["status"] == "FINISHED") {
                        matches +=`<tr><td>${data["matches"][i]["homeTeam"]["name"]}</td><td>${data["matches"][i]["score"]["fullTime"]["homeTeam"]} - ${data["matches"][i]["score"]["fullTime"]["awayTeam"]}</td><td>${data["matches"][i]["awayTeam"]["name"]}</td></tr>`
                    }
                }
                return matches;
            }
            document.getElementById("info").innerHTML = `<p id="meneet">Menneeet</p> ${this.endMatches()}`
        }))
}