import React, {useState} from 'react'
import styled from 'styled-components'
import {ModalWindow} from "./ui/modal-window/modal-window";

const SmallImageStl = styled.img`
  width: 150px;
  height: 102px;
  cursor: pointer;
  margin: 10px;
  border-radius: 3px;
`



export const SmallImage= ({id, urlSmall, urlLarge}) => {


    const [isShowModalWindow, setIsShowModalWindow] = useState(false)


    const onOpenModalWindow = () => {
        setIsShowModalWindow(true)
    }

    const onCloseModalWindow = () => {
        setIsShowModalWindow(false)
    }

    console.log(urlLarge)

    return (
        <>
            <SmallImageStl src={urlSmall} onClick={onOpenModalWindow}/>

            {
                isShowModalWindow ? <ModalWindow urlLarge={urlLarge} onClose={onCloseModalWindow}/> : null
            }

        </>

    )
}

