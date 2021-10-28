import React from 'react'
import styled from 'styled-components'
import {azureColor, orangeColor} from "../../../styleConsts";

const BtnSelectThemeStl = styled.button`
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  text-transform: uppercase;
  background-color: ${azureColor};
  color: #fff;
  cursor: pointer;
  transition: 0.3s;
  &:hover, &:active {
    background-color: ${orangeColor};
  }
`



export const BtnSelectTheme = ({title, onClick}) => {



    return (
        <BtnSelectThemeStl onClick={onClick}>
            {title}
        </BtnSelectThemeStl>
    )
}

