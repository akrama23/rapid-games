//BASE URL
const base_url = 'https://api.rawg.io/api/';
const api_key = 'key=64494e4b6d0f4050b3e2c029876da973';


// gettting the month
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if(month < 10){
        return `0${month}`;
    } else {
        return month;
    }
};
// getting day
const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10){
        return `0${day}`;
    } else {
        return day;
    }
};

// current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popular_games = `games?${api_key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?${api_key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?${api_key}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;


//GAME DETAILS

export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}?${api_key}`;

//game screenshots 
export const gameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots?${api_key}`;

//search
export const searchGameURL = (game_name) => `${base_url}games?${api_key}&search=${game_name}&page_size=9`;

// console.log(upcomingGamesURL());