import React from 'react';
import AuthProps from '../../models/AuthProps';
import AuthFlow from '../../models/AuthFlow';
import AuthTextButton from '../AuthTextButton';
import withGap from '../utils/withGap';
import AuthInputField, { AuthInputFieldType } from '../AuthInputField';
import SubmitButton from '../SubmitButton';
import createInputList from '../utils/createInputList';

const ForgotPassword: React.SFC<AuthProps> = (props) => {

    const [email, setEmail] = React.useState("");

    const inputElement = createInputList([
        <AuthInputField value={email} setValue={setEmail} fieldType={AuthInputFieldType.EMAIL}/>
    ]);

    const onSubmit = () => props.setAuthState({ ...props.authState, flow: AuthFlow.PASSWORD_RESET_SENT });
    const submitButton =  <SubmitButton onClick={onSubmit} isLoading={false}/>;

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