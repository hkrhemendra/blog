const Server = require('./server.js')

let server = new Server().app;
let port = 9000;

server.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
})