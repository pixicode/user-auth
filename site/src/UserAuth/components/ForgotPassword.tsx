import React from 'react';
import AuthProps from '../models/AuthProps';
import AuthFlow from '../models/AuthFlow';
import AuthTextField from './AuthTextField';
import AuthTextButton from './AuthTextButton';

const ForgotPassword: React.SFC<AuthProps> = (props) => {

    const withGap = (element: JSX.Element) => {
        return <div style={{ "marginTop": "1.2rem" }}>
            {element}
        </div>
    }

    const inputElement = <div>
        <ul className="list-group">
            <AuthTextField />
        </ul>
    </div>

    const submitButton = <div>
        <input className="btn btn-lg btn-primary btn-block" type="submit" value="Submit"
            onClick={() => props.setAuthState({ ...props.authState, flow: AuthFlow.PASSWORD_RESET_SENT })}></input>
    </div>

    const goBackToLanding = () => props.setAuthState({ ...props.authState, flow: AuthFlow.LANDING });
    const backButton = <AuthTextButton label="Back" onClick={goBackToLanding}/>;

    return <>
        Forgot your password? We can send a reset instructions to your email.
        {withGap(inputElement)}
        {withGap(submitButton)}
        {backButton}
    </>;
}

export default ForgotPassword;