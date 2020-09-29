import React from 'react';
import AuthProps from '../../models/AuthProps';
import AuthFlow from '../../models/AuthFlow';
import AuthTextButton from '../AuthTextButton';
import SubmitButton from '../SubmitButton';
import AuthInputField, { AuthInputFieldType } from '../AuthInputField';
import withGap from '../utils/withGap';
import createInputList from '../utils/createInputList';
import AuthApi from '../../api/AuthApi';

const Landing: React.SFC<AuthProps> = (props) => {

    const [isLoading, setIsLoading] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const inputElement = createInputList([
        <AuthInputField value={email} setValue={setEmail} fieldType={AuthInputFieldType.EMAIL}/>,
        <AuthInputField value={password} setValue={setPassword} fieldType={AuthInputFieldType.PASSWORD}/>
    ]);

    const goToForgotPassword = () => props.setAuthState({ ...props.authState, flow: AuthFlow.FORGOT_PASSWORD });
    const forgotPasswordButton = <AuthTextButton label="Forgot Password?" onClick={goToForgotPassword} />;
    const forgotPasswordElement = <div className="text-left">{forgotPasswordButton}</div>;

    // const signIn = () => props.setAuthState({ ...props.authState, flow: AuthFlow.SIGNED_IN, status: AuthStatus.AUTHENTICATED });
    const signIn = () => { 
        setIsLoading(true); 
        AuthApi.signIn(email, password)
        .then(x => {
            console.log(`Login complete: ${x}`);
            setIsLoading(false);
            props.setAuthState({ ...props.authState, flow: AuthFlow.SIGNED_IN });
        })
        .catch(x => {
            console.log("Failed to resolve signIn", x);
            setIsLoading(false);
        }); 
    }
    
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