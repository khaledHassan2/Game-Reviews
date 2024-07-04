"use strict";
export let dataGames;
export let detailsData;

export class Get {
    
        // get games --------------------
    
    async getGames(link) {
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '16d809e9femsh8b67fc476dcc22ep1f83e1jsnc8063b4cd655',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${link}`, options);
        dataGames = await response.json();


    }

        // get Deatails --------------------

    async getDetails(idCard) {

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '16d809e9femsh8b67fc476dcc22ep1f83e1jsnc8063b4cd655',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idCard}`, options);
        detailsData = await response.json();
        
    }
}


