import { APIGatewayProxyEvent, Context, APIGatewayProxyResult } from "aws-lambda"


export const handler = async (event: any = {}): Promise<any> => {
    console.log('Hello World!');
    const response = JSON.stringify(event, null, 2);
    return response;
}

export const signIn = async (event: any = {}): Promise<APIGatewayProxyResult> => {
    console.log("Signing In");
    event["token"] = "kanyewest";
    const respobseBody = JSON.stringify(event, null, 2);
    const response: APIGatewayProxyResult = {
        statusCode: 200,
        body: respobseBody,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
        }
    }
    return response;
}