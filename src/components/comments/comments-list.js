import React from 'react'
import styled from 'styled-components'
import {commentsData} from "../../data-models";
import {CommentsItem} from "./comments-item";


const CommentsListStl = styled.div`

`



export const CommentsList = () => {






    return (
        <CommentsListStl>
            {
                commentsData.map(i => <CommentsItem content={i.content} userId={i.userId} date={i.date}/>)
            }
        </CommentsListStl>
    )
}