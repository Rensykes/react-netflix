import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
    return (
        //! If the user is logged in (user is passed), redirect to the page he was on,
        //! Otherwise, render the SignIn Page

        <Route
            {...rest}
            render={() => {
                if (!user) {
                    return children; //SignIn Page
                }

                if (user) {
                    return (
                        <Redirect
                            to={{
                                pathname: loggedInPath
                            }}
                        />
                    );
                }
                return null;
            }}
        />

    )
}

export function ProtectedRoute({user, children, ...rest}){
    return (
        //! If i have a protected route and someone tries to access it and is logged in, render it
        //! Otherwise redirect to signin

        <Route 
            {...rest}
            render={({location}) => { //used to protect the history
                if(user){
                    return children; //for example, browse page
                }
                
                if(!user){
                    return(
                        <Redirect 
                            to={{
                                pathname: 'signin',
                                state: {from: location},
                            }}
                        />
                    );
                }

                return null;
            }}
        />
    )
}