import React from 'react';
import AuthProps from '../models/AuthProps';
import AuthFlow from '../models/AuthFlow';
import AuthTextButton from './AuthTextButton';

const PasswordResetSent: React.SFC<AuthProps> = (props) => {

    const goBackToLanding = () => props.setAuthState({ ...props.authState, flow: AuthFlow.LANDING });
    const backButton = <AuthTextButton label="Back" onClick={goBackToLanding} />;

    return <>
        <div>Password reset instructions sent.</div>
        {backButton}
    </>;
}

export default PasswordResetSent;