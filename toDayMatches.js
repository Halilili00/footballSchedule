const baseURL = "https://api.football-data.org";
const headers = new Headers({ "X-Auth-Token": '44a62b19e4c143229b3e339d31f8f579' });

function getData() {
    fetch(`${baseURL}/v2/matches`, { headers })
        .then(response => response.json().then(data => {
            this.game = function () {
                var gamelist = "";
                for (var i = 0; i < data["matches"]['length']; i++) {
                    this.homeTeam = data["matches"][i]["homeTeam"]["name"]
                    this.homeScore = data["matches"][i]["score"]["fullTime"]["homeTeam"]
                    this.awayTeam = data["matches"][i]["awayTeam"]["name"]
                    this.awayScore = data["matches"][i]["score"]["fullTime"]["awayTeam"]
                    this.gameDate = function () {
                        this.gameDateHour = parseInt((data["matches"][i]["utcDate"]).slice(11, 13)) + 2;
                        this.gameDateMinut = parseInt((data["matches"][i]["utcDate"]).slice(14, 16));
                        if (this.gameDateMinut == 0) {
                            this.gameDateMinut = "00"
                        }
                        return this.gameDateHour + ":" + this.gameDateMinut
                    }
                    if (this.homeScore === null && this.awayScore === null) {
                        gamelist += `<tr><td>${this.homeTeam}</td><td>${this.gameDate()}</td><td>${this.awayTeam}</td></tr>`;
                    }
                    else {
                        gamelist += `<tr><td>${this.homeTeam}</td><td>${this.homeScore} - ${this.awayScore}</td><td>${this.awayTeam}</td></tr>`
                    }
                }
                return `${gamelist}`
            }
            document.getElementById("info").innerHTML = this.game();
        }))
}
getData()