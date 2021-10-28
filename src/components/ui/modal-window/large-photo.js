import React from 'react'
import styled from 'styled-components'


const LargePhotoStl = styled.img`

width: 70%;
`



export const LargePhoto = ({urlLarge}) => {



    return (
        <LargePhotoStl src={urlLarge} />
    )
}