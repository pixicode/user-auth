import AuthState from "./models/AuthState";
import Landing from "./components/flow/Landing";
import React from 'react';
import Register from "./components/flow/Register";
import AuthProps from "./models/AuthProps";
import ForgotPassword from "./components/flow/ForgotPassword";
import AuthFlow from "./models/AuthFlow";
import PasswordResetSent from "./components/flow/PasswordResetSent";
import VerifyAccount from "./components/flow/VerifyAccount";
import Profile from "./components/flow/Profile";


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