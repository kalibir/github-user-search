import React from "react";
import styled from "styled-components";

const Nav = styled.div`
    width: 100%;
    background: #495057;
    display: flex;
    padding-left: 8px;
`

const NavText = styled.p`
    margin: 8px;
    font-size: 24px;
    color: white;
    font-weight: 400;
`

const NavBar = () =>{
    return (
        <Nav>
            <NavText>Github User Search</NavText>
        </Nav>
    )
}

export default NavBar;