import * as express from 'express';
import { Request, Response } from 'express';
import * as cors from "cors";
import axios from "axios";

const app = express();
const port = 8080;

app.use(cors({origin: "*"}));

app.get('/', (req: Request, res: Response) => {
  res.send("Wow, you have dockerized your first application!")
});

/*
app.get("/secret", async (req: Request, res: Response) => {
  await axios.get("http://docker_backend:8081", {
    method: "GET"
  })
  .then((response) => {
    res.send(`Secret message found, it says: ${response.data.secret}`)
  })
  .catch(() => {
    res.status(404).send("There's a crazy groundbreaking new functionality, but can't seem to communicate with the secret backend")
  })
})
*/

app.listen(port, () => {
  console.log(`Backend started on port ${port}!`);
});