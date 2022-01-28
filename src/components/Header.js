import React from 'react';
import styled from 'styled-components';

function Header() {
    return (
        <Nav>
            <Logo src='/images/logo.png'/>
            <NavMenu>
                <a>
                    <span>КАТАЛОГ</span>
                </a>
                <a>
                    <span>DIGITALPOINT CLUB</span>
                </a>
                <a>
                    <span>СКИДКИ ДО 50%</span>
                </a>
                <a>
                    <span>КРЕДИТ И РАССРОЧКА</span>
                </a>
                <a>
                    <span>APPLE</span>
                </a>
                <a>
                    <span>ДОСТАВКА</span>
                </a>
            </NavMenu>
            <LoginReg><a>ЛИЧНЫЙ КАБИНЕТ</a></LoginReg>
        </Nav>
    );
};

const Nav = styled.nav`
    overflow-x: hidden;
    overflow-y: hidden;
    height: 80px;
    background: #000000;
    display: flex;
    align-items: center;
    padding: 0 10px;
`;

const Logo = styled.img`
    height: 170px;
    width: 170px;
`;

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;


        span{
            font-size: 14px;
            letter-spacing: 1.5px;
            position: relative;

            &:after{
                content: "";
                height: 2px;
                background: #7fda56;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            };
        };

        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            };
        };
    };

`;

const LoginReg = styled.div`
    background-color: #747474;
    width: 170px;
    height: 20px;
    cursor: pointer;
    border-radius: 7px;
    transition: all 250ms;
    letter-spacing: 1.5px;
    text-align: center;

    a{
        font-size: 13px;
    }

    &:hover{
        background-color: #7fda56;
        color: black;
    }
`;

export default Header;
