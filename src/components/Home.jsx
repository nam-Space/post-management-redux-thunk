import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "../styles/home.css";
import { renderPost } from "../thunk/thunk";

const Home = () => {
    let posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        posts = dispatch(renderPost());
    }, []);

    const navigate = useNavigate();

    const handleAdd = () => {
        navigate("/management", {
            state: {
                action: "Add",
            },
        });
    };

    const handleEdit = (id) => {
        navigate("/management", {
            state: {
                id: id,
                action: "Edit",
            },
        });
    };

    return (
        <div className="container pt-3">
            <div className="d-flex justify-content-between mb-5">
                <h1>Post</h1>
                <button className="btn btn-success" onClick={handleAdd}>
                    Add new Post
                </button>
            </div>
            {posts.map((post, index) => (
                <div
                    key={index}
                    className="d-flex justify-content-between align-items-center item"
                >
                    <div className="text-layout">
                        <h3 className="mb-4">{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                    <button
                        className="btn btn-info text-center text-white"
                        style={{
                            width: "100px",
                            height: "50px",
                            fontWeight: 600,
                        }}
                        onClick={() => handleEdit(post.id)}
                    >
                        Edit
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Home;
