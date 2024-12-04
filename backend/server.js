const app = require("./app.js");

const PORT = process.env.PORT || 8000;
console.log(PORT);

app.listen(PORT, (error) => {
  if (!error) {
    console.log(
      `Server is running successfully on port http://localhost:${PORT}`
    );
  } else {
    console.log("An error occurred when running the server", error);
  }
});
