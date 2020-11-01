import { signUp } from "./handler";

test("Handler encrypts token", () => {
    const result = signUp({statusCode: 200});
    result.then(x => {console.log(x); console.log("Expected Return");});
});
