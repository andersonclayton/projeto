
import React from "react";
import {Route, Redirect} from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {

  const token = sessionStorage.getItem('token')

  return (
    <Route
      {...rest}
      render={props =>{
        return token ? (
          <Component {...props} {...rest} />
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
            }
      }
    />
  );
}