import React from "react";
//Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../img/logo.svg';


const Nav = () => {

    return(
        <StyledNav>
            <Logo>
                <img src={logo} alt="logo"/>
                <h1>hello</h1>
            </Logo>
            <div className="search">
                <input type="text"/>
                <button>search</button>
            </div>
        </StyledNav>

    );
};

const StyledNav = styled(motion.nav)`

`;

const Logo = styled(motion.div)`

`;

export default Nav;
