const initialState = {
    favoriti: {
        content: [],
    },
}

const mainReducer = (state = initialState, action) => {
    //switch
    switch(action.type){
        case 'ADD_TO_FAV':
            return {
                ...state,
                favoriti: {
                    ...state.favoriti,
                    content: [...state.favoriti.content, action.payload]
                }
            }


        case 'REMOVE_FROM_FAV':
            return{
                ...state,
                favoriti: {
                    ...state.favoriti,
                    content: [
                        ...state.favoriti.content.slice(0, action.payload),
                        ...state.favoriti.content.slice(action.payload + 1, state.favoriti.content.length)
                    ]
                }
            }
        default:
            return state
    }
}

export default mainReducer