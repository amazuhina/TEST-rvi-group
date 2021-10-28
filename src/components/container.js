import React from 'react'
import styled from 'styled-components'
import {Navigation} from "../navigation";


const ContainerStl = styled.div`
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
`



export const Container = () => {
    return (
        <ContainerStl>
            <Navigation/>
        </ContainerStl>
    )
}

