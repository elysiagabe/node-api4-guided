const server = require("./api/server.js");

// MAKE THE PORT DYNAMIC INSTEAD OF ASSIGNING VALUE (LIKE 5000)
// ...allow Heroku to assign port when deploying
const port = process.env.PORT || 5000; // process.env.PORT will be Heroku-assigned port, but if that's not available (e.g., in local dev environment), it will use port 5000
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
