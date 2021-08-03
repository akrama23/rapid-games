

const initState = {
    popular: [],
    newGames: [],
    upcoming: [],
    searched: []
}


const gamesReducer = (state = initState, action) => {
    switch (action.type) {
        //updating popular state
        case "FETCH_GAMES":
            return {...state, popular: action.payload.popular};
        default:
            return {...state};
    }

};

//ACTION CREATOR
const fetchGames = (useData) => {
    return {
        type: "FETCH_GAMES",
    };
};

export default gamesReducer;