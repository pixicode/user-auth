import React from 'react';
import AuthProps from '../models/AuthProps';
import AuthStatus from '../models/AuthStatus';
import { LockFill, Envelope } from 'react-bootstrap-icons';
import AuthFlow from '../models/AuthFlow';
import AuthTextButton from './AuthTextButton';
import SubmitButton from './SubmitButton';

const Landing: React.SFC<AuthProps> = (props) => {

    const [isLoading, setIsLoading] = React.useState(false);

    const withGap = (element: JSX.Element) => {
        return <div style={{ "marginTop": "1.2rem" }}>
            {element}
        </div>
    }

    const inputElement = <div>
        <ul className="list-group">
            <li className="list-group-item d-flex">
                <Envelope size={"1.2rem"} color="#888" style={{ marginTop: "auto", marginBottom: "auto", marginRight: "1rem" }} />
                <input style={{ border: "None", width: "100%" }} type="text" placeholder="Username" />
            </li>

            <li className="list-group-item d-flex">
                <LockFill size={"1.2rem"} color="#888" style={{ marginTop: "auto", marginBottom: "auto", marginRight: "1rem" }} />
                <input style={{ border: "None", width: "100%" }} type="password" placeholder="Password" />
            </li>
        </ul>
    </div>

    const goToForgotPassword = () => props.setAuthState({ ...props.authState, flow: AuthFlow.FORGOT_PASSWORD });
    const forgotPasswordButton = <AuthTextButton label="Forgot Password?" onClick={goToForgotPassword} />;
    const forgotPasswordElement = <div className="text-left">{forgotPasswordButton}</div>;

    // const signIn = () => props.setAuthState({ ...props.authState, flow: AuthFlow.SIGNED_IN, status: AuthStatus.AUTHENTICATED });
    const signIn = () => {setIsLoading(true)}
    const submitButton = <SubmitButton onClick={signIn} isLoading={isLoading}/>;

    const goToRegister = () => props.setAuthState({ ...props.authState, flow: AuthFlow.REGISTERING });
    const registerButton = <AuthTextButton label="Create an account" onClick={goToRegister} />;

    const errorElement = <div className="alert alert-danger" role="alert">
        A simple primary alert—check it out!
    </div>

    return <>
        Please sign in to continue.
        {withGap(errorElement)}
        {withGap(inputElement)}
        {forgotPasswordElement}
        {withGap(submitButton)}
        {registerButton}
    </>;
}

export default Landing;