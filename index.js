//imoport express library
import express from "express"

//initialize express server
const app = express()

// list requests that we want express to respond too
// ROUTES ALWAYS NEED A / AT THE BEGINNING
app.get("/hello", (request, response) => {
  //do something when we get a request to this route
  response.send("Hello World!");
})

//start listening on a port
app.listen(3001, () => {
  console.log(`now listening on port 3001`)
})
