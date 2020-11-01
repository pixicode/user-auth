export const signUp = async (event: any = {}): Promise<any> => {
    console.log("Signing In");
    event["token"] = "kanyewest";
    const respobseBody = JSON.stringify(event, null, 2);
    const response = {
        statusCode: 200,
        body: respobseBody,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
        }
    }
    return response;
}