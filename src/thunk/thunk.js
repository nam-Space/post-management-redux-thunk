import axios from "axios";
import { ADD_POST, RENDER, UPDATE_POST } from "../redux/action";

export const renderPost = () => {
    return async (dispatch) => {
        const res = await axios.get("http://localhost:3001/posts");

        dispatch({
            type: RENDER,
            payload: res.data,
        });
    };
};

export const addPost = (payload) => {
    return async (dispatch) => {
        const res = await axios.post("http://localhost:3001/posts", payload);
        dispatch({
            type: ADD_POST,
            payload,
        });
    };
};

export const updatePost = (payload) => {
    return async (dispatch) => {
        const res = await axios.put(
            `http://localhost:3001/posts/${payload.id}`,
            payload.post
        );
        dispatch({
            type: UPDATE_POST,
            payload,
        });
    };
};
