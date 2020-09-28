import React from 'react';
import AuthProps from '../../models/AuthProps';
import AuthFlow from '../../models/AuthFlow';
import AuthTextButton from '../AuthTextButton';
import withGap from '../utils/withGap';
import AuthInputField, { AuthInputFieldType } from '../AuthInputField';
import SubmitButton from '../SubmitButton';
import createInputList from '../utils/createInputList';

const Register: React.SFC<AuthProps> = (props) => {

    const [isLoading, setIsLoading] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const inputElement = createInputList([
        <AuthInputField value={email} setValue={setEmail} fieldType={AuthInputFieldType.EMAIL}/>,
        <AuthInputField value={password} setValue={setPassword} fieldType={AuthInputFieldType.PASSWORD}/>
    ]);

    const onSubmit = () => props.setAuthState({ ...props.authState, flow: AuthFlow.VERIFY_ACCOUNT });
    const submitButton = <SubmitButton onClick={onSubmit} isLoading={isLoading}/>;

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