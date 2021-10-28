import React from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";



const BtnLoginStl = styled.button`
  width: 270px;
  height: 33px;
  padding: 5px 10px;
  margin: 50px auto;
  text-align: center;
  text-transform: uppercase;
  border: 3px solid #38525c;
  background-color: transparent;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1px;
  color: #fff;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    color: #38525c;
    background-color: #fff;
    border: 3px solid #fff;
  }  
`



export const BtnLogin = ({title, link}) => {


      const history = useHistory()


    const onLogin = () => {
        history.push("/gallery")
    }

    return (
        <BtnLoginStl onClick={onLogin}>
            {title}
        </BtnLoginStl>
    )
}
