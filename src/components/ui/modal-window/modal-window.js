import React from 'react'
import styled from 'styled-components'
import {LargePhoto} from "./large-photo";
import {CommentsWindow} from "../../comments/comments-window";


const ModalWindowStl = styled.div``

const OverlayStl = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,.7);
`

const FormModalWindowStl = styled.div`
  position: fixed;
  top: 5vh;
  left: 20%;
  z-index: 100;
  width: 70%;
  max-height: 90vh;
  background: white;
  margin: 0 auto;
  padding: 1em;
  display: flex;
  justify-content: space-between;
`



export const ModalWindow = ({onClose, urlLarge}) => {

    return (
        <ModalWindowStl>
            <OverlayStl onClick={onClose}/>
            <FormModalWindowStl>
                <LargePhoto urlLarge={urlLarge}/>
                <CommentsWindow/>
            </FormModalWindowStl>
        </ModalWindowStl>
    )
}