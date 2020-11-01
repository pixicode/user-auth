import { handler } from "./handler";

test("Handler encrypts token", () => {
    const result = handler({statusCode: 200});
    result.then(x => {console.log(x); console.log("Expected Return");});
});
