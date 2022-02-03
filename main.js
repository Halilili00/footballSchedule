class Mac {
    constructor(){
        this.awayTeam1 = "";
        this.homeTeam1 = "";
    }
    static async getTodayMatches() {
        const response = await fetch(`${BASE_URL}/v2/matches`, { headers });
    
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }
        const jsonData = await response.json();
        this.getD(jsonData.matches)
    }
    
    static getD(response) {
        let x = new Mac()
        x.awayTeam1 = response
        return x;
    }
}

console.log(new Mac().getD)


/*function Player(){
    const postWeb = (data) => {
        return data;
    }
    this.name = postWeb()
    this.age = 21;
}

let y = new Player()
console.log(y.name)

/*const myUser = {
    userList: []
}


const myCoolFunction = async () => {
    const response = await fetch("https://api.football-data.org/v2/matches", {
        "method": "GET",
        "headers": {
            'X-Auth-Token': '44a62b19e4c143229b3e339d31f8f579'
        }
    })
    const jsonUserData = await response.json();
    //console.log(jsonData.matches[0].awayTeam.name)
    return jsonUserData;
}

const anotherFunc = async () => {
    const data = await myCoolFunction();
    myUser.userList = data.matches[0];
    console.log(myUser.userList)
}

anotherFunc()

function anfunk() {
    console.log(myUser)
}
anfunk()




const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);*/