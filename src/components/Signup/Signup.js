import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../lib/firebase";

function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    const isInvalid = password === "" || email === "" || name === "";

    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if(auth){
                    history.push("/browse");
                }
            })
            .catch((err) => {
                setName("");
                setEmail("");
                setPassword("");
                setError(err.message);
            });
    }

    return (
        <div className="signin">
            <h1 className="signin__title">Sign Up</h1>
            {error && <div className="signin__error">{error}</div>}
            <form  onSubmit={handleSubmit} className="signin__form">
                <input 
                    className="form__input"
                    type="name"
                    placeholder="First Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    className="form__input"
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    className="form__input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    disabled={isInvalid}
                    className={`form__button ${isInvalid && "disabled"}`}
                >
                    Sign Up
                </button>
            </form>
            <p className="signin__text">
                Already to Netflix?
                <Link className="signin__link" to="/signin">
                    Sign In
                </Link>
            </p>
            <p className="signin__infoText">
                This page is protected by Google reCAPTCHA to ensure you're not a bot.
                Learn more.
            </p>
        </div>
    )
}

export default Signup
