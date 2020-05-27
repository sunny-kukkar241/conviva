import React from "react";
import './header.css';
import UserOutlined from "@ant-design/icons/UserOutlined";
import CareDownOutlined from "@ant-design/icons/CaretDownOutlined";

const Header = () => {
    return (
        <div className={"Header"}>
            <div className={"logo-container"}>
                <img onClick={()=> window.location.hash ="/" } width={50} src="img/logo1.png" className={"img-container"} alt={""} />

            </div>

            <div className={"user-container"}>
                <UserOutlined style={{fontSize:"20px"}} />
                <CareDownOutlined style={{fontSize:"16px", paddingLeft:"5px"}} />

            </div>
        </div>

        
    );
};

export default Header;

