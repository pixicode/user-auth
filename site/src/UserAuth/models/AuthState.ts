import AuthStatus from "./AuthStatus";
import AuthFlow from "./AuthFlow";
import AuthUser from "./AuthUser";
import AuthError from "./AuthError";

interface AuthState {
    status: AuthStatus;
    flow: AuthFlow;
    user?: AuthUser;
    error?: AuthError;
    errorDetails?: string;
}

export const newAuthState = (): AuthState => {
    return {
        status: AuthStatus.UNAUTHENTICATED,
        flow: AuthFlow.LANDING
    };
}

export const copyAndClear = (state: AuthState): AuthState => {
    // Return a new AuthState only copying the required variables.
    return {
        status: state.status,
        flow: state.flow
    }
}


export default AuthState;