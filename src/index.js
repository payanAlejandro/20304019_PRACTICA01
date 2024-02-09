const port = 3000;
const app =  require("./api")

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
