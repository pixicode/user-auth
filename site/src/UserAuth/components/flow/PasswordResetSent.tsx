import React from 'react';
import AuthProps from '../../models/AuthProps';
import AuthFlow from '../../models/AuthFlow';
import AuthTextButton from '../AuthTextButton';
import AuthApi from '../../api/AuthApi';
import SubmitButton from '../SubmitButton';
import withGap from '../utils/withGap';

const PasswordResetSent: React.SFC<AuthProps> = (props) => {

    const [isLoading, setIsLoading] = React.useState(false);
    const goBackToLanding = () => props.setAuthState({ ...props.authState, flow: AuthFlow.LANDING });
    const backButton = <AuthTextButton label="Back" onClick={goBackToLanding} />;

    const onForgotPasswordSubmit = () => { 
        setIsLoading(true); 
        AuthApi.forgotPassword("foo")
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

    const submitButton =  <SubmitButton label={"Resend"} onClick={onForgotPasswordSubmit} isLoading={isLoading}/>;

    return <>
        <div>Password reset instructions sent.</div>
        {withGap(submitButton)}
        {backButton}
    </>;
}

export default PasswordResetSent;