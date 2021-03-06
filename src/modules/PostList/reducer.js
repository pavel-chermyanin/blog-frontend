const initialState = {
    items: null,
}

export default (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'POSTS_SET_ITEMS':
            return {
                ...state,
                items: payload,
            }
        case 'POSTS_APPEND_ITEM':
            return {
                ...state,
                items: state.items ? [...state.items, payload] : [payload]
            }
        case 'POSTS_REMOVE_ITEM':
            return {
                ...state,
                items: state.items.filter(item => item._id !== payload)
            }

        default:
            return state;
    }
}