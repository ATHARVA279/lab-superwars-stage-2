const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

    // initialize players with image and strength
    // Create players using for loop
    // Type your code here
    const initPlayers = (players) => {
        let playerDetails = []
    for (let i=0;i<players.length;i++){
        let playerInformation = {}
        playerInformation.name = players[i]
        playerInformation.strength = getRandomStrength()
        playerInformation.image = "./images/super-"+(i+1)+".png"
        if (i%2 == 0){
            playerInformation.type = "hero"
        }else{
            playerInformation.type = "villain"
        }
        playerDetails.push(playerInformation)
    }
    console.log(playerDetails)
    return playerDetails
    }

// getting random strength

    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
const getRandomStrength = () => {
    return Math.ceil(Math.random()*100)
}


    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
const buildPlayers = (players, type) => {
    let fragment = " "
    for (let i=0;i<players.length;i++){
        if (players[i].type === type){
            let items = 
            `<div class="player">
            <img src="${players[i].image}" alt="">
            <div class="name">${players[i].name}</div>
            <div class="strength">${players[i].strength}</div>
            </div>`
                    

            fragment += items;
        }
    }
    return fragment
}
// Display players in HTML
const seePlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero')
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain')

}

window.onload = () => {
    seePlayers(initPlayers(PLAYERS))
}