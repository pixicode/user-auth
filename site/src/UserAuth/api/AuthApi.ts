import AuthError from "../models/AuthError";
import AuthUser from "../models/AuthUser";
import AuthResponse from "./AuthResponse";

class AuthApi {

    public static signIn = (email: string, password: string): Promise<AuthResponse> => {
        console.log(`Signing In: ${email} : ${password}`);
        
        var promise = new Promise<AuthResponse>((resolve, reject) => {
            setTimeout(() => {
                console.log("Login complete!");
                const response: AuthResponse = {
                    success: false,
                    error: AuthError.UNKNOWN,
                    errorDetails: "Unable to connect."
                }

                const response2: AuthResponse = {
                    success: true,
                    user: {
                        email: email,
                        token: "mytoken",
                        name: "John"
                    }
                }

                resolve(response2);
            }, 1500);
        });
        return promise;
    }

    public static register = (email: string, password: string): Promise<AuthResponse> => {
        console.log(`Registering: ${email} : ${password}`);
        var promise = new Promise<AuthResponse>((resolve, reject) => {
            setTimeout(() => {
                console.log("Registering complete!");
                const response: AuthResponse = {
                    success: false,
                    error: AuthError.UNKNOWN,
                    errorDetails: "Unable to connect."
                }

                resolve(response);
            }, 1500);
        });
        return promise;
    }

    public static signOut = (token: string): Promise<string> => {
        console.log(`Signing Out: ${token}`);
        var promise = new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                console.log("Signout complete!");
                resolve(`Sign out ${token}`);
            }, 1500);
        });
        return promise;
    }

    public static forgotPassword = (email: string): Promise<string> => {
        console.log(`Forgot password: ${email}`);
        var promise = new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                console.log("Forgot password!");
                resolve(`Forgot password for ${email}`);
            }, 1500);
        });
        return promise;
    }
}

export default AuthApi;