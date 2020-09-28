import AuthStatus from "./AuthStatus";
import AuthFlow from "./AuthFlow";
interface AuthState {
    status: AuthStatus;
    flow: AuthFlow;
}

export const newAuthState = (): AuthState => {
    return {
        status: AuthStatus.UNAUTHENTICATED,
        flow: AuthFlow.LANDING
    };
}


export default AuthState;