import React from "react";
import styled from "styled-components";
import {FaUserAlt, FaUsers} from "react-icons/fa";
import { GoRepo } from "react-icons/go";

const Card = styled.div`
    width: 25%;
    border: 0.5px solid #dee2e6;
    margin-top: 32px;
    box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.11);
`

const Avatar = styled.div`
    width: 100%;
    height: 325px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
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
const UserCard = (props) =>{
    console.log(props.useravatar)
    return (
        <Card>
            <Avatar style={{backgroundImage: 'url(' + props.useravatar + ')'}}/>
            <InfoBar><FaUserAlt size ={16} color={'#adb5bd'}/><BarText>{props.userlogin}</BarText></InfoBar>
            <InfoBar> <FaUsers size ={16} color={'#adb5bd'}/><BarText>{props.userfollowers} Followers</BarText></InfoBar>
            <InfoBar><GoRepo size ={16} color={'#adb5bd'}/><BarText>{props.userrepos} Repos</BarText></InfoBar>
            <InfoBar><FaUsers size ={16} color={'#adb5bd'}/><BarText>{props.userfollwing} following</BarText></InfoBar>
        </Card>
    )
}

export default UserCard;