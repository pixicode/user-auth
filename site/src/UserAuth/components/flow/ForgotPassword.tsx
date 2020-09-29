import React from 'react';
import AuthProps from '../../models/AuthProps';
import AuthFlow from '../../models/AuthFlow';
import AuthTextButton from '../AuthTextButton';
import withGap from '../utils/withGap';
import AuthInputField, { AuthInputFieldType } from '../AuthInputField';
import SubmitButton from '../SubmitButton';
import createInputList from '../utils/createInputList';
import AuthApi from '../../api/AuthApi';

const ForgotPassword: React.SFC<AuthProps> = (props) => {

    const [isLoading, setIsLoading] = React.useState(false);
    const [email, setEmail] = React.useState("");

    const inputElement = createInputList([
        <AuthInputField value={email} setValue={setEmail} fieldType={AuthInputFieldType.EMAIL}/>
    ]);

    const onForgotPasswordSubmit = () => { 
        setIsLoading(true); 
        AuthApi.forgotPassword(email)
        .then(x => {
            console.log(`Forgot password done: ${x}`);
            setIsLoading(false);
            props.setAuthState({ ...props.authState, flow: AuthFlow.PASSWORD_RESET_SENT });
        })
        .catch(x => {
            console.log("Forgot password", x);
            setIsLoading(false);
        }); 
    }

    const submitButton =  <SubmitButton onClick={onForgotPasswordSubmit} isLoading={isLoading}/>;

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