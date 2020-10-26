import React from 'react';
import { newAuthState } from './models/AuthState';
import UserAuthComponentFactory from './UserAuthComponentFactory';
import AuthProps from './models/AuthProps';
import AuthApi from './api/AuthApi';

interface UserAuthProps {

}

const UserAuth: React.SFC<UserAuthProps> = (props) => {

    const [authState, setAuthState] = React.useState(newAuthState());

    AuthApi.testApi()
    .then(console.log)
    .catch(console.log)
    .finally(() => console.log("Test call completed"));

    const authProps: AuthProps = {
        authState: authState,
        setAuthState: setAuthState
    }

    const authComponent = UserAuthComponentFactory.componentForState(authState, authProps);
    const serviceElement = <div>
        <h1>My Company</h1>
    </div>;

    return <div className="content-box">
        {serviceElement}
        {authComponent}
    </div>;
}

export default UserAuth;