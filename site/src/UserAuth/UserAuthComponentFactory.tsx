import AuthState from "./models/AuthState";
import AuthStatus from "./models/AuthStatus";
import Landing from "./components/Landing";
import React from 'react';
import Register from "./components/Register";
import AuthProps from "./models/AuthProps";
import ForgotPassword from "./components/ForgotPassword";
import AuthFlow from "./models/AuthFlow";
import PasswordResetSent from "./components/PasswordResetSent";
import VerifyAccount from "./components/VerifyAccount";
import Profile from "./components/Profile";


class UserAuthComponentFactory {

    public static componentForState = (authState: AuthState, authProps: AuthProps) => {
        switch (authState.flow) {

            case AuthFlow.LANDING:
                return <Landing {...authProps} />;

            case AuthFlow.REGISTERING:
                return <Register {...authProps} />;

            case AuthFlow.FORGOT_PASSWORD:
                return <ForgotPassword {...authProps} />;

            case AuthFlow.PASSWORD_RESET_SENT:
                return <PasswordResetSent {...authProps} />;

            case AuthFlow.VERIFY_ACCOUNT:
                return <VerifyAccount {...authProps} />;

            case AuthFlow.SIGNED_IN:
                return <Profile {...authProps} />;
        }
    }
}

export default UserAuthComponentFactory;