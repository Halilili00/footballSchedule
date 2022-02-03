function getTeamName() {
    fetch(`${baseURL}/v2/competitions/2001/teams`,{ headers })
        .then(response => response.json())
        .then(data => {
            let searchTeam = document.getElementById("search").value
            let findId;
            for (let i = 0; i < data["teams"]["length"]; i++) {
                if (searchTeam == data["teams"][i]["name"])
                    findId = data["teams"][i]["id"]
            }
            teamId(findId)
        })
        .catch((error) =>{
            console.error("error",error)
        })
}

function teamId(teamId) {
    fetch(`${baseURL}/v2/teams/${teamId}/matches`,{ headers })
        .then(response => response.json().then(data => {
            this.upComingMatches = function () {
                let matches = "";
                for (let i = 0; i < data["matches"]["length"]; i++) {
                    this.gameTime = function () {
                        this.gameDateHour = parseInt((data["matches"][i]["utcDate"]).slice(11, 13)) + 2;
                        this.gameDateMinut = parseInt((data["matches"][i]["utcDate"]).slice(14, 16));
                        if (this.gameDateMinut == 0) {
                            this.gameDateMinut = "00"
                        }
                        return this.gameDateHour + ":" + this.gameDateMinut
                    }
                    this.gameDate = function () {
                        return (data["matches"][i]["utcDate"]).slice(0, 10)
                    }
                    if (data["matches"][i]["status"] == "SCHEDULED") {
                        matches += `<tr><td>${this.gameDate()}</td><td>${data["matches"][i]["homeTeam"]["name"]}</td><td>${this.gameTime()}</td><td>${data["matches"][i]["awayTeam"]["name"]}</td></tr>`
                    }
                }
                return matches;
            }
            document.getElementById("info").innerHTML = this.upComingMatches();
        }))
}

