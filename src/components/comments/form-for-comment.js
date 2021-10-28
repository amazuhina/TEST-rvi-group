import React from 'react'
import styled from 'styled-components'
import {BtnSendComment} from "../ui/buttons/btn-send-comment";


const FormForCommentStl = styled.div`
  display: flex;
  flex-direction: column;
`

const InputCommentStl = styled.input`
  outline: none;
  width: 90%;
  margin: 15px auto;
  padding: 10px 5px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #ddd;

`

export const FormForComment = () => {






    return (
        <FormForCommentStl>
            <InputCommentStl type={'text'} placeholder={'Оставьте свой комментарий'}/>
            <BtnSendComment title={'Отправить'}/>
        </FormForCommentStl>
    )
}