const app = require("../app");

const port = process.env.PORT || 8000;

app.listen(port, "0.0.0.0", () => {
  console.log(`Your App is waiting for you at http://localhost:${port}`);
});
