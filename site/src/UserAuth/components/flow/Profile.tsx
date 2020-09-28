import React from 'react';
import AuthProps from '../../models/AuthProps';
import AuthFlow from '../../models/AuthFlow';
import AuthTextButton from '../AuthTextButton';

const Profile: React.SFC<AuthProps> = (props) => {

    const signOut = () => props.setAuthState({ ...props.authState, flow: AuthFlow.LANDING });
    const backButton = <AuthTextButton label="Sign Out" onClick={signOut} />;

    return <>
        <div>You are signed in!</div>
        {backButton}
    </>;
}

export default Profile;