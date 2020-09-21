import React from "react";
import styled from "styled-components";
import NavBar from "../navbar";
import UserCard from "../usercard";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const SearchForm = styled.form`
    margin-top: 32px;
    display: flex;
    justify-content: space-around;
    width: 600px;
`

const SearchBar = styled.input`
    width: 400px;
    height: 40px;
    border: 0.5px solid #adb5bd;
    border-radius: 8px;
    outline: none;
    padding-left: 8px;
`

const SearchBtn = styled.button`
    width: 170px;
    padding:8px;
    outline: none;
    border: none;
    color: white;
    background: #adb5bd;
    border-radius: 8px;
`

const GlobalWrapper = () =>{
    return(
        <Wrapper>
            <NavBar />
            <SearchForm>
                <SearchBar />
                <SearchBtn>Search</SearchBtn>
            </SearchForm>
            <UserCard />
        </Wrapper>
    )
}

export default GlobalWrapper;