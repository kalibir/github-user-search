import React, {useState, useEffect} from "react";
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

const GlobalWrapper = (props) =>{
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [followers, setFollowers] = useState('');
    const [following, setFollowing] = useState('');
    const [repos, setRepos] = useState('');
    const [avatar, setAvatar] = useState('');
    const [userInput, setUserInput] = useState('');
    const [error, setError] = useState('');

    const setData = ({name, login, followers, following, public_repos, avatar_url}) => {
        setName(name);
        setUserName(login);
        setFollowers(followers);
        setFollowing(following);
        setRepos(public_repos);
        setAvatar(avatar_url);
    };


    useEffect(() => {
        fetch("https://api.github.com/users/example")
        .then(res => res.json())
        .then(data => {
            setData(data);
        });
    }, [])
  
    const handleSearch = (e) => {
        setUserInput(e.target.value);
    }

    const handleSubmit = () => {
        fetch(`https://api.github.com/users/${userInput}`)
        .then(res => res.json())
        .then(data => {
            if (data.message){
                    setError(data.message)
            } else {
                setData(data);
                setError(null);
            }
            
        })
    }
    
    return(
        <Wrapper>
            <NavBar />
            <SearchForm onSubmit={handleSubmit}>
                <SearchBar placeholder="Search..." onChange={handleSearch}/>
                <SearchBtn>Search</SearchBtn>
            </SearchForm>
        {error ? <h1>{error}</h1> :
             <UserCard username = {name} userlogin={userName} userfollowers = {followers} 
            userfollowing = {following} userrepos = {repos} useravatar = {avatar}/>}
        </Wrapper>
    )
}

export default GlobalWrapper;