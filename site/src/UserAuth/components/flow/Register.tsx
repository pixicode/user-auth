import React from 'react';
import AuthProps from '../../models/AuthProps';
import AuthFlow from '../../models/AuthFlow';
import AuthTextButton from '../AuthTextButton';
import withGap from '../utils/withGap';
import AuthInputField, { AuthInputFieldType } from '../AuthInputField';
import SubmitButton from '../SubmitButton';
import createInputList from '../utils/createInputList';
import AuthApi from '../../api/AuthApi';
import { copyAndClear } from '../../models/AuthState';

const Register: React.FunctionComponent<AuthProps> = (props) => {

    const [isLoading, setIsLoading] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const inputElement = createInputList([
        <AuthInputField value={email} setValue={setEmail} fieldType={AuthInputFieldType.EMAIL} />,
        <AuthInputField value={password} setValue={setPassword} fieldType={AuthInputFieldType.PASSWORD} />
    ]);

    const register = () => {
        setIsLoading(true);
        AuthApi.register(email, password)
            .then(x => {

                console.log("Registering complete");
                console.log(x);
                setIsLoading(false);
                if (x.success) {
                    props.setAuthState({ ...props.authState, flow: AuthFlow.VERIFY_ACCOUNT, user: x.user });
                } else {
                    props.setAuthState({ ...props.authState, error: x.error, errorDetails: x.errorDetails });
                }
            })
            .catch(x => {
                console.log("Failed to resolve registration", x);
                setIsLoading(false);
            });
    }

    const submitButton = <SubmitButton onClick={register} isLoading={isLoading} />;
    const goBackToLanding = () => props.setAuthState({...copyAndClear(props.authState), flow: AuthFlow.LANDING });
    const backButton = <AuthTextButton label="Back" onClick={goBackToLanding} />;

    let errorElement: JSX.Element | null = null;
    if (props.authState.error !== undefined) {
        errorElement = withGap(
            <div className="alert alert-danger" role="alert">
                {props.authState.error}: {props.authState.errorDetails}
            </div>
        )
    }

    return <>
        Register new account!
        {errorElement}
        {withGap(inputElement)}
        {withGap(submitButton)}
        {backButton}
    </>;
}

export default Register;