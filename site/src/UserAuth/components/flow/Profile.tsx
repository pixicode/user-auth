import React from 'react';
import AuthProps from '../../models/AuthProps';
import AuthFlow from '../../models/AuthFlow';
import AuthApi from '../../api/AuthApi';
import AuthStatus from '../../models/AuthStatus';
import SubmitButton from '../SubmitButton';
import withGap from '../utils/withGap';

const Profile: React.SFC<AuthProps> = (props) => {

    const [isLoading, setIsLoading] = React.useState(false);

    const onSignOutSubmit = () => { 
        setIsLoading(true); 
        AuthApi.signOut("foo")
        .then(x => {
            console.log(`Signout done: ${x}`);
            setIsLoading(false);
            props.setAuthState({ ...props.authState, 
                flow: AuthFlow.LANDING, 
                status: AuthStatus.UNAUTHENTICATED, 
                user: undefined });
        })
        .catch(x => {
            console.log("Failed to resolve registration", x);
            setIsLoading(false);
        }); 
    }

    const submitButton = <SubmitButton label="Sign Out" onClick={onSignOutSubmit} isLoading={isLoading}/>;

    return <>
        <div>You are signed in as: {props.authState.user?.email}</div>
        {withGap(submitButton)}
    </>;
}

export default Profile;