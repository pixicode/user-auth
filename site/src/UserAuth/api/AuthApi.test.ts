import AuthApi from "./AuthApi";

test('Test AuthApi Endpoint', async () => {
    console.log(AuthApi.ENDPOINT);
    console.log("Pass Test");
    

    const response = await AuthApi.testApi();

    expect(response.token).toBe("kanyewest");
});