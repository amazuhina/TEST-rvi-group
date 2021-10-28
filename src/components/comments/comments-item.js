import React from 'react'
import styled from 'styled-components'


const CommentsItemStl = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

const CommentsTextStl = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #000;
`


const CommentsDescriptionStl = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 24px;
`

const AuthorStl = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: #000;
`

const DateStl = styled.h4`
  font-size: 11px;
  font-weight: 300;
  color: #999;
`

export const CommentsItem = ({content, date, userId}) => {



    return (
        <CommentsItemStl>
            <CommentsDescriptionStl>
                <AuthorStl>
                    {userId}
                </AuthorStl>
                <DateStl>
                    {date}
                </DateStl>
            </CommentsDescriptionStl>

            <CommentsTextStl>
                {content}
            </CommentsTextStl>

        </CommentsItemStl>
    )
}