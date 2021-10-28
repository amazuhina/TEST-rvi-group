import React from 'react'
import styled from 'styled-components'
import {BtnSelectTheme} from "../ui/buttons/btn-select-theme";
import {Gallery} from "../gallery";
import {useDispatch} from "react-redux";
import {pushData} from "../../redux/images-slice";


const MainPageStl = styled.div`
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
`

const MenuBlockStl = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 10px;
`




export const MainPage= () => {

    const dispatch = useDispatch()

    const getData = () => {
        fetch('https://pixabay.com/api/?key=24038901-16e96aec3337b1269d72ce18d&q=animal&image_type=photo&pretty=true&per_page=50')
            .then(res => res.json())
            .then(res => {
                const payload = {
                    images: res.hits.map(i => ({
                        id: i.id,
                        previewURL: i.previewURL,
                        largeImageURL: i.largeImageURL,
                        isFavorite: false,
                    }))
                }
                dispatch(pushData(payload))
            })
            .catch(errorMessage => {
                console.log(errorMessage.error)
            })
    }


    const uploadImages = () => {
        getData()

    }

    return (
        <MainPageStl>
            <MenuBlockStl>
                <BtnSelectTheme title={'Автомобили'} onClick={uploadImages}/>
                <BtnSelectTheme title={'Архитектура'}/>
                <BtnSelectTheme title={'Животные'}/>
            </MenuBlockStl>
            <Gallery/>
        </MainPageStl>
    )
}