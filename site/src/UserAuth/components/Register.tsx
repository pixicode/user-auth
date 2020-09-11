import React from 'react';
import AuthProps from '../models/AuthProps';
import AuthFlow from '../models/AuthFlow';
import AuthTextField from './AuthTextField';
import AuthTextButton from './AuthTextButton';

const Register: React.SFC<AuthProps> = (props) => {

    const withGap = (element: JSX.Element) => {
        return <div style={{ "marginTop": "1.2rem" }}>
            {element}
        </div>
    }

    const inputElement = <div>
        <ul className="list-group">
            <AuthTextField />
            <AuthTextField />
        </ul>
    </div>

    const submitButton = <div>
        <input className="btn btn-lg btn-primary btn-block" type="submit" value="Submit"
            onClick={() => props.setAuthState({ ...props.authState, flow: AuthFlow.VERIFY_ACCOUNT })}></input>
    </div>

    const goBackToLanding = () => props.setAuthState({ ...props.authState, flow: AuthFlow.LANDING });
    const backButton = <AuthTextButton label="Back" onClick={goBackToLanding} />;

    const errorElement = <div className="alert alert-danger" role="alert">
        A simple primary alert—check it out!
    </div>

    return <>
        Register new account!
        {withGap(errorElement)}
        {withGap(inputElement)}
        {withGap(submitButton)}
        {backButton}
    </>;
}

export default Register;