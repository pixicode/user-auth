import AuthState from "./models/AuthState";
import AuthStatus from "./models/AuthStatus";
import Landing from "./components/Landing";
import React from 'react';
import Register from "./components/Register";
import AuthProps from "./models/AuthProps";
import ForgotPassword from "./components/ForgotPassword";


class UserAuthComponentFactory {

    public static componentForState = (authState: AuthState, authProps: AuthProps) => {
        switch (authState.status) {
            case AuthStatus.UNAUTHENTICATED:
                return <Landing {...authProps} />;

            case AuthStatus.REGISTERING:
                return <Register {...authProps} />;

            case AuthStatus.FORGOT_PASSWORD:
                return <ForgotPassword {...authProps} />;
        }
    }
}

export default UserAuthComponentFactory;