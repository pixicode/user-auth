class AuthApi {

    public static signIn = (email: string, password: string): Promise<string> => {
        console.log(`Signing In: ${email} : ${password}`);
        var promise = new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                console.log("Login complete!");
                resolve(`Sign in result with ${email} : ${password}`);
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

    public static register = (email: string, password: string): Promise<string> => {
        console.log(`Registering: ${email} : ${password}`);
        var promise = new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                console.log("Registering complete!");
                resolve(`Registering with ${email} : ${password}`);
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