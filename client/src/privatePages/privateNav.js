import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const Nav = styled.div`
    max-width: 1010px;
    padding: 26px 20px;
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
`;
const NavLeft = styled.div`
    width: 20%;
    text-align: left;
    color: #ffffff;
    font-family: Impact, fantasy;
    text-decoration: none; 
`;

const NavRight = styled.div`
    width: 50%;
    text-align: right;
    position: relative;
    left: 60%;
    svg {
        margin-right: 50px;
    }
`;
const NavItem = styled.div`
    color: #ffffff;
    float: left;
    padding: 40px;
    text-decoration: none;
    text-align: right; 
    font-size: 15px;
    font-family: Impact, fantasy;
`;

const PrivateNav = ((props) => {
    return (
        < Nav >
            <NavLeft>
                <Link to={'/'}>
                    <NavItem> StockUP </NavItem>
                </Link>
            </NavLeft>

            <NavRight>
                <Link to={'/trade'}>
                    <NavItem> Trade </NavItem>
                </Link>

                <NavItem onClick={props.handleLogout}> Logout </NavItem>
            </NavRight>
        </Nav >
    )
});
export default PrivateNav;