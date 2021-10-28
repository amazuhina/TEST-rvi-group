import React, {useState} from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {BtnLogin} from "../ui/buttons/btn-login";
import {useHistory} from "react-router-dom";



const LoginPageStl = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`


const InputsBlockStl = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`


const InputStl = styled.input`
  min-width: 238px;
  height: 25px;
  outline: none;
  border: none;
  padding: 0 5px;
  font-size: 14px;
  margin-right: 15px;
  color: #251c1c;
  border-radius: 3px;
  margin-bottom: 15px;  
`

const ButtonsBlockStl = styled.div`
  display: flex;
`


const TitleStl = styled.h1`
  text-align: center;
  font-weight: 600; 
  margin-bottom: 50px;
`



export const LoginPage = () => {

    const dispatch = useDispatch()

    const [login, setLogin] = useState()

    const [password, setPassword] = useState()


    const onValueChangeLogin = (event) => {
        const value = event.target.value

        setLogin(value)
    }


    const onValueChangePassword = (event) => {
        const value = event.target.value

        setPassword(value)
    }


    // const history = useHistory()
    //
    // const onRegistration = () => {
    //     history.push("/registration")
    // }



    return (
        <LoginPageStl>
            <TitleStl>
                Тестовое задание RVI group
            </TitleStl>
            <InputsBlockStl>


                <InputStl
                    type={'text'}
                    placeholder={'Введите логин'}
                    onChange={onValueChangeLogin}
                    value={login}
                />

                <InputStl
                    type={'password'}
                    placeholder={'Введите пароль'}
                    onChange={onValueChangePassword}
                    value={password}
                />


            </InputsBlockStl>
            <ButtonsBlockStl>
                <BtnLogin title={'Войти'} link={'gallery'}/>
                <BtnLogin title={'Зарегистрироваться'} link={'registration'}/>
            </ButtonsBlockStl>



        </LoginPageStl>
    )
}
