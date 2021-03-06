import AuthError from "../models/AuthError";
import AuthUser from "../models/AuthUser";

interface AuthResponse {
    success: boolean;
    user?: AuthUser;
    error?: AuthError;
    errorDetails?: string;
    token?: string;
}

export default AuthResponse;