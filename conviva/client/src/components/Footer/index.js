import React from 'react';
import './footer.css';

const Footer = () => {
    return(
        <div className={"Footer"}>
            <div className={"logo-container"}>
                <img className={"img-footer"} src={"/img/logo-footer.png"} alt={"logo footer"} />
            </div>
            <div className={"links-container"}>
                <a href="/" className={"link-item"}>Learn more</a>
                <a href="/" className={"link-item"}>Contact us</a>
            </div>
        </div>
    )
};
export default Footer;