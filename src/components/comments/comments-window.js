import React from 'react'
import styled from 'styled-components'
import {CommentsList} from "./comments-list";
import {FormForComment} from "./form-for-comment";
import {LikesCounter} from "../likes-counter";


const CommentsWindowStl = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`



export const CommentsWindow = ({urlLarge}) => {



    return (
        <CommentsWindowStl>
            <LikesCounter/>
            <CommentsList/>
            <FormForComment/>

        </CommentsWindowStl>
    )
}