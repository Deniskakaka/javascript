window.addEventListener("error", function onUnhandledError (err) {
    console.error("error", err.message);
});

let userParsingResult;

try {
    let json = '{"name": "Denis"}'
    const user = JSON.parse(json);
    console.log("User data: ", user);
    userParsingResult = "success";
} catch(e) {
    userParsingResult = "error";
} finally {
    console.log(`User parsing finished with ${userParsingResult}`);
}

let productParsingResult;

try {
    let json = '{"name": "Denis"'
    const product = JSON.parse(json);
    console.log("Product data: ", product);
    productParsingResult = "success";
} catch(e) {
    productParsingResult = "error";
} finally {
    console.log(`Product parsing finished with ${productParsingResult}`);
}