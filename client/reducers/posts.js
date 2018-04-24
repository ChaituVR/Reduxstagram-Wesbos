
function posts(state = [],action){
    console.log('posts reducer');
    console.log(state,action);

    switch(action.type){
        case 'INCREMENT_LIKES':
        const i = action.index
            return [
                ...state.slice(0,i),
                {...state[i],likes:state[i].likes + 1},
                ...state.slice(i+1),
            ]
        default:
            return state;
    }

    
    
}

export default posts;