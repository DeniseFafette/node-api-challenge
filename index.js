const server = require('./api/server');
const port = 3000;

server.listen(port, () => console.log(`Server is on ${port}`));