function postMessage(msg) {
    var request = new XMLHttpRequest();      // New request
    request.open("GET", "http://localhost:8080/springmvc");        // POST to a server-side script
    // Send the message, in plain-text, as the request body
    request.setRequestHeader("Content-Type", // Request body will be plain text
                             "text/plain;charset=UTF-8");
    request.send(msg);                       // Send msg as the request body
    // The request is done. We ignore any response or any error.

    console.log(request.status);
}

