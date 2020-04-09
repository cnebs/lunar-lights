import React from 'react';
import logo from "../img/logo_1.png";

// react-bootstrap
import Image from 'react-bootstrap/Image';

const Logo = (props) => {
    return (
        <Image src={logo} fluid />
    )
}

export default Logo;