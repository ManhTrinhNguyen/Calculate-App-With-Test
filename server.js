const express = require("express");
const app = express();
let port = 8100; // Default port

// Serve static files from the 'app' directory
app.use(express.static("app"));

// Function to start the server
async function startServer() {
  // Dynamic import for ES Module
  const getPort = (await import("get-port")).default;

  // Use getPort to find an open port within the specified range
  port = await getPort({ port: [...Array(100).keys()].map((p) => p + port) });

  app.listen(port, () => {
    console.log(`Local server is up and running at http://localhost:${port}`);
  });
}

// Start the server
startServer();
