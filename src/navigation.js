import {Redirect, Route, Switch} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";
import {MainPage} from "./components/pages/main-page";
import {RegistrationPage} from "./components/pages/registration-page";
import {LoginPage} from "./components/pages/login-page";
import {userSelector} from "./redux/user-slice";



const PrivateRoute = ({ children}) => {

    const auth = useSelector(userSelector.isAuth)

    return (
        <Route
            render={({ location }) =>
                auth ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}



export const Navigation = () => {
    return (
        <Switch>
            <Route path="/gallery">
                <MainPage/>
            </Route>

            <Route path="/registration">
                <RegistrationPage/>
            </Route>

            <Route path="/">
                <LoginPage/>
            </Route>
        </Switch>
    )
}