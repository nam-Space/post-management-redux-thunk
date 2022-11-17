import { ADD_POST, RENDER, UPDATE_POST } from "./action";

const initialState = {
    posts: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case RENDER:
            return {
                ...state,
                posts: action.payload,
            };
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload],
            };

        case UPDATE_POST:
            state.posts[action.payload.id - 1] = action.payload.post;
            console.log(state.posts);
            return state;
        default:
            return state;
    }
};

export default rootReducer;
