import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  
  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
  }
  
   @media screen and (max-width: 640px) {
    height: auto;
    margin: 3px 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  display: flex;
  align-items: center;
  
  .logo {
    transform: scale(3.5);
  }
  
  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
    
    .logo {
    transform: scale(1.5);
    }
  }
  
  @media screen and (max-width: 640px) {
    margin: 10px 0;
  }
`;

export const UserContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  font-size: 20px;
  
  span {
    font-weight: bold;
    letter-spacing: 2px;
    text-align: center;
  }
  
  @media screen and (max-width: 640px) {
   justify-content: center;
   padding-left: 0;
   font-size: 18px;
  }
`;


export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  @media screen and (max-width: 640px) {
   width: 100%;
   justify-content: center;
   margin-bottom: 30px;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 900;
`;

