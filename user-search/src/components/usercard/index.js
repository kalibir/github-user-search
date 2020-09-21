import React from "react";
import styled from "styled-components";
import {FaUserAlt, FaUsers} from "react-icons/fa";
import { GoRepo } from "react-icons/go";

const Card = styled.div`
    width: 300px;
    border: 0.5px solid #dee2e6;
    margin-top: 32px;
`

const Avatar = styled.div`
    width: 100%;
    height: 225px;
    background: salmon;
`

const InfoBar = styled.div`
    display: flex;
    width: 100%;
    padding: 16px;
    align-items: center;
    border-bottom: 0.5px solid #dee2e6;
`

const BarText = styled.p`
    margin-left: 16px;
`
const UserCard = () =>{
    return (
        <Card>
            <Avatar />
            <InfoBar><FaUserAlt size ={16} color={'#adb5bd'}/><BarText>User name</BarText></InfoBar>
            <InfoBar> <FaUsers size ={16} color={'#adb5bd'}/><BarText>12 Followers</BarText></InfoBar>
            <InfoBar><GoRepo size ={16} color={'#adb5bd'}/><BarText>2 Repos</BarText></InfoBar>
            <InfoBar><FaUsers size ={16} color={'#adb5bd'}/><BarText>0 following</BarText></InfoBar>
        </Card>
    )
}

export default UserCard;