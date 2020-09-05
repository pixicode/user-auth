import UserAuth from "../UserAuth";
import AuthStatus from "./AuthStatus";
interface AuthState {
    status: AuthStatus;
}

export const newAuthState = (): AuthState => {
    return {
        status: AuthStatus.UNAUTHENTICATED
    };
}


export default AuthState;