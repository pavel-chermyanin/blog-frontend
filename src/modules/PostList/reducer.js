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

        default:
            return state;
    }
}