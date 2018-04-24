
function comments(state = [],action){
    // console.log(state,action);
    switch(action.type){
        case 'ADD_COMMENT':
        var comments = Object.assign({},state);
        if(comments[action.postId]){
            comments[action.postId].push({text: action.comment, user: action.author});
        }else{
            comments[action.postId] = [{text: action.comment, user: action.author}];
        }
        return comments;
        default:
        return state;
    }
}

export default comments;