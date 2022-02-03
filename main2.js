fetch(`${baseURL}/v2/matches`, { headers })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
                /*const names = data.matches.map((matches) => {
                    return matches.awayTeam
                });
                console.log(names);*/
                document.getElementById("player").innerHTML = dayGame(data.matches);
            })

function dayGame(data){
    const aTeam = data
    .map((data) => {
        return `${data.awayTeam.name}<br>`
    })
    const hTeam = data
    .map((data) => {
        return `${data.homeTeam.name}<br>`
    })
    const score = data
    .map((data) => {
        return `-<br>`
    })

    return `<table><tr><td>${hTeam}</td><td>${score}</td><td>${aTeam}</td></tr></table>`
}
/*export default class MatchDetail {
    constructor() {
      this.id = 0;
      this.utcDate = "";
      this.status = "";
      this.venue = "";
      this.matchday = 0;
    }
    static fromJSON(json) {
        const match = new MatchDetail();
        match.id = json.match.id;
        match.competition = json.match.competition;
        match.season = json.match.season;
        match.utcDate = json.match.utcDate;
        match.status = json.match.status;
        match.venue = json.match.venue;
        match.matchday = json.match.matchday;
        return match;
    }
}*/

/*function getTeamId() {
    fetch("https://api-football-beta.p.rapidapi.com/players?id=276", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "api-football-beta.p.rapidapi.com",
            "x-rapidapi-key": "01523e12f7msh292706d8bd26f78p1d0f85jsn36f7375c6cd1"
        }
    })
        .then(response => response.json().then(data => {
            console.log(data["response"]);
        }))
        .catch(err => {
            console.error(err);
        });
}
getTeamId()


function getData2() {
    fetch("https://v3.football.api-sports.io/fixtures/players?fixture=157024&team=33", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "efd6e410b9bb07ff712cd54a6c076f7c"
        }
    })
        .then(response => response.json().then(data => {
            /*for(let i=0; i<data["response"][0]["players"]["length"]; i++){
                console.log(data["response"][0]["players"][i]["name"])
            }
            console.log(data["response"])
            /*const name = data["player"]["firstName"];
            this.name = data["player"]["firstName"]
            this.nationality = data["player"]["nationality"]
            this.dateOfBrith = data["player"]["dateOfBirth"]
            this.position = data["player"]["position"]
            console.log(this.name);
            console.log(name)
            player2(name);
            return "name: " + data
        }))
}
getData2()*/

/*function player2(info){
    var pname = info
    //console.log(pname)
    return pname
}

player2()

function Player(){
    this.name = "Halil"
    this.age = 21;
}

function tulos(){
   /*var player12 = new Player2()
    console.log(player12)
    var player21 = new Player();
    console.log(player21.name)
}

tulos()

*/

/*fetch("http://api.football-data.org/v2/players/44/matches", {
    "method": "GET",
    "headers": {
        'X-Auth-Token': '44a62b19e4c143229b3e339d31f8f579'
    }
})
.then(response => response.json().then(data =>{
    console.log(response)
    var player = new Object();
    player.name = data["player"]["firstName"]
    console.log(player.name)
}))*/

/*function Player2(){
    fetch("http://api.football-data.org/v2/players/44/matches", {
    "method": "GET",
    "headers": {
        'X-Auth-Token': '44a62b19e4c143229b3e339d31f8f579'
    }
})
.then(response => response.json().then(data =>{
    return this.name = data["player"]["firstName"]
    //this.nationality = data["player"]["nationality"]
    console.log(this.name);
}))
console.log();
}

function Player(){
    this.name = "Halil"
    this.age = 29;
}

function tulos(){
    var player12 = new Player2()
    console.log(player12)
    var player21 = new Player();
    console.log(player21)
}

tulos()*/
