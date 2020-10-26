import AuthError from "../models/AuthError";
import AuthUser from "../models/AuthUser";
import AuthResponse from "./AuthResponse";

class AuthApi {

    public static ENDPOINT: string = "https://m5xaeftri8.execute-api.us-east-1.amazonaws.com/prod/auth";

    private static invokePostApi = (endpoint: string, payload: object, onResponseReceived:(x: any) => void, onError:(x: any) => void) => {
        console.log("Getting from API: " + endpoint);
        const request = AuthApi.createPostRequest(payload);
        fetch(endpoint, request)
            .then(rawResponse => rawResponse.json())
            .then(response => onResponseReceived(response))
            .catch(error => onError(error));
    }

    private static createPostRequest = (payload: object) => {
        const request = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        };
        return request;
    }
    

    public static testApi = (): Promise<AuthResponse> => {
        console.log(`Testing the endpoint: ${AuthApi.ENDPOINT}`);

        var promise = new Promise<AuthResponse>((resolve, reject) => {
            const response: AuthResponse = {
                success: true,
                token: "null"
            }
            AuthApi.invokePostApi(AuthApi.ENDPOINT, {}, (x) => { console.log(x); response.token = x.token; resolve(response);}, reject);
        });

        
        return promise;
    }

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