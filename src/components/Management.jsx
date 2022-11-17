import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "../styles/management.css";
import { addPost, updatePost } from "../thunk/thunk";

const Management = () => {
    const {
        state: { id, action },
    } = useLocation();

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
    const [post, setPost] = useState({ title: "", body: "" });

    useEffect(() => {
        if (id) {
            const prePost = posts[id - 1];
            setPost(prePost);
        }
    });

    const validateSchema = Yup.object().shape({
        title: Yup.string().required(),
        body: Yup.string().required(),
    });

    const handleChange = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (values) => {
        if (action === "Add") {
            dispatch(addPost(values));
        } else {
            dispatch(
                updatePost({
                    id,
                    post: values,
                })
            );
        }
        navigate("/");
    };

    return (
        <div className="container">
            <h1 className="my-5">{action === "Add" ? "New" : "Edit"} Post</h1>
            <Formik
                initialValues={post}
                enableReinitialize
                validationSchema={validateSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div className="item w-50">
                        <h5>Title</h5>
                        <Field
                            onChange={handleChange}
                            value={post.title || ""}
                            type="text"
                            name="title"
                            className="mb-4"
                        />
                        <ErrorMessage
                            component="div"
                            name="title"
                            className="error"
                        />

                        <h5>Content</h5>
                        <Field
                            onChange={handleChange}
                            value={post.body || ""}
                            as="textarea"
                            rows="5"
                            name="body"
                            style={{ width: "100%" }}
                        />
                        <ErrorMessage
                            component="div"
                            name="body"
                            className="error"
                        />
                    </div>
                    <button
                        className="btn btn-success"
                        type="submit"
                        style={{ height: "50px", width: "100px" }}
                    >
                        {action === "Add" ? "Add" : "Save"}
                    </button>
                </Form>
            </Formik>
        </div>
    );
};

export default Management;
