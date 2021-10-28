import React from 'react'
import styled from 'styled-components'
import {azureColor, lightColor} from "../../../styleConsts";


const BtnSendCommentStl = styled.button`
  padding: 10px 20px;
  border: none;
  outline: none;
  width: 90%;
  margin: 0 auto;
  text-transform: uppercase;
  color: #fff;
  background-color: ${azureColor};
  border-radius: 7px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: ${lightColor};
  }
`



export const BtnSendComment = ({title}) => {




    return (
        <BtnSendCommentStl>
            {title}
        </BtnSendCommentStl>
    )
}