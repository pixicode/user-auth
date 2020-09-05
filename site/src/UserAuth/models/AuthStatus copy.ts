import AuthState from "./AuthState";

interface AuthProps {
    authState: AuthState;
    setAuthState: (x: AuthState) => void;
}

export default AuthProps;