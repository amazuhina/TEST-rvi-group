import React, {useState} from "react";
import styled from "styled-components";
import activeLikeIcon from "../attachments/active-like.png"
import notActiveLikeIcon from "../attachments/not-active-like.png"



const LikesCounterStl = styled.div`
  display: flex;
`

const CounterStl = styled.p`
  color: #999;
  margin: 0;
`


const IconStl = styled.div`
  cursor: pointer;
  transition: 0.2s;
  margin-right: 15px;
  
`

export const LikesCounter = () => {


    const [isLiked, setIsLiked] = useState(false)


    const onChangeLikeStatus = () => {
        setIsLiked(!isLiked)
    }



const number = 45

    return (
        <LikesCounterStl>
            <IconStl onClick={onChangeLikeStatus}>
                {
                    isLiked ? <img src={activeLikeIcon}/> : <img src={notActiveLikeIcon}/>
                }
            </IconStl>

            <CounterStl>
                {number}
            </CounterStl>
        </LikesCounterStl>
    )
}
