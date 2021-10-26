import React, {useState} from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fetchSearch } from '../actions/gamesAction';
import { useDispatch } from "react-redux";
import {fadeIn} from "../animation";

import logo from '../img/logo.svg';

const Nav = () => {
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState("");

    const inputHandler = (e) => {
        setTextInput(e.target.value);
    };
    const submitSearch = (e) => {
        e.preventDefault();
        dispatch(fetchSearch(textInput));
        setTextInput('');
    };
    const clearSearched = () => {
        dispatch({ type: "CLEAR_SEARCH" });
    };

    return(
        <StyledNav variants={fadeIn} initial ='hidden' animate= "show">
            <Logo onClick={clearSearched}>
                <img src={logo} alt="logo" />
                <h1>Ignite</h1>
            </Logo>
            <form className="search">
                <input onChange={inputHandler} value={textInput} type="text" />
                <button type="submit" onClick={submitSearch}>Search</button>
            </form>
        </StyledNav>
    );
};

const StyledNav = styled(motion.div)`
    padding: 3rem 5rem;
    text-align: center;
    input{
        width: 30%;
        font-size: 1.5rem;
        padding: 0.5rem;
        border: none;
        margin-top:1rem;
        box-shadow: 0 0 30px rgba(0,0,0,0.2);
        :focus-visible{
            outline: solid #ff7676 1px;
        }
    }
    button {
        font-size: 1.5rem;
        border: none;
        margin-top:1rem;
        padding: 0.5rem 2rem;
        cursor: pointer;
        background: #ff7676;
        color:white;
    }
`;

const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;
    img{
        height: 2rem;
        width: 2rem;
    }
`;

export default Nav;