import React from 'react';
import styled from 'styled-components';




function Admin() {


  return (
    <Container>
      <AdminMenu>
        <NavMenu>
          <a>
            <span>СТАТИСТИКА</span>
          </a>
          <a>
            <span>ТОВАРЫ</span>
          </a>
          <a>
            <span>УПРАВЛЕНИЕ</span>
          </a>
          <a>
            <span>МАРКЕТПЛЕЙС</span>
          </a>
          <a>
            <span>СОТРУДНИКИ</span>
          </a>
          <a>
            <span>ЛОГИСТИКА</span>
          </a>
          <a>
            <span>WEB SITE</span>
          </a>
        </NavMenu>
        <ScheduleContainer>
       
        </ScheduleContainer>
      </AdminMenu>
    </Container>
  )
};

const Container = styled.div`
min-height: calc(100vh - 80px);
position: relative;
display: flex;
align-items: top;
justify-content: center;


&:before{
    position: absolute;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.7;
    background-image: url("/images/registration-background.png");
    z-index: -1;
}
`;

const AdminMenu = styled.div`
    display: flex;
    overflow-x: hidden;
    overflow-y: hidden;
    background-color: #747474;
    border-radius: 3px;
    // opacity: 30%;
    width: 150px;
    height: calc(100vh - 80px);
    left: 0;
    position: absolute;
    z-index: 1;
`;

const NavMenu = styled.div`
display: flex;
flex: 1;
flex-direction: column;
align-items: center;

a{
    display: flex;
    align-items: center;
    padding: 30px 0px;
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

const ScheduleContainer = styled.div`

`;


export default Admin;
