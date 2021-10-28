import React, {useState} from 'react'
import styled from 'styled-components'
import {useSelector} from "react-redux";
import {imagesSelector} from "../redux/images-slice";
import {SmallImage} from "./small-image";

const GalleryStl = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`


const GalleryTextStl = styled.h3`
  text-align: center;
  margin: 100px auto;
  color: #fff;
`


export const Gallery= () => {

    const images = useSelector(imagesSelector)



    return (
        <GalleryStl>
            {
                images === null  ? <GalleryTextStl>Выберите тему</GalleryTextStl>: (
                    images.map(i =>
                        <SmallImage
                            id={i.id}
                            urlSmall={i.previewURL}
                            urlLarge={i.largeImageURL}
                        />))
            }

        </GalleryStl>
    )
}

