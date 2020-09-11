import React from 'react';
import AuthProps from '../models/AuthProps';
import { Envelope } from 'react-bootstrap-icons';
import AuthFlow from '../models/AuthFlow';
import AuthTextButton from './AuthTextButton';

const VerifyAccount: React.SFC<AuthProps> = (props) => {

    const goBackToLanding = () => props.setAuthState({ ...props.authState, flow: AuthFlow.LANDING });
    const backButton = <AuthTextButton label="Back" onClick={goBackToLanding} />;

    return <>
        <div>Please verify your account.</div>
        {backButton}
    </>;
}

export default VerifyAccount;